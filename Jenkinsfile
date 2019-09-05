def imageName = "testing"

def imageTag = null

def buildImage = null

def dockerContainerId = null

def test = null

def version = 'latest'

node {
    stage('Checkout') {
        cleanWs()

        checkout scm
    }
    stage('Build') {
        imageTag = "${imageName}"

        // buildImage = docker.build(imageTag, "--no-cache")
        sh "docker build . -t ${imageTag} --no-cache"
    }
    stage('Testing') {
        def failed = false
        try {
            sh "docker run - ${imageTag}"
        }
        catch(Exception ex) {
            println 'We have tests that failed!'
            failed = true
        }
        dockerContainerId = sh(script: "docker ps -aqf \"ancestor=${imageName}:latest\"", returnStdout: true).trim()
        sh "docker cp ${dockerContainerId}:/app/support/report/cucumber_report.html test_report.html"
        test = sh(script: "docker inspect ${dockerContainerId} --format='{{.State.ExitCode}}'", returnStdout: true).trim()
        sh "docker rm ${dockerContainerId}"
        if(failed) {
            sh "exit 1"
        }
    }
}