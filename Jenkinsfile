def imageName = "testing"

def imageTag = null

def buildImage = null

def dockerContainerId = null

def test = null

def version = 'latest'

node {
    stage('Checkout') {
        // cleanWs()

        checkout scm
    }
    stage('Build') {
        imageTag = "${imageName}"
        // sh  "curl -fsSLO https://get.docker.com/builds/Linux/x86_64/docker-17.04.0-ce.tgz && tar xzvf docker-17.04.0-ce.tgz && mv docker/docker /usr/local/bin && rm -r docker docker-17.04.0-ce.tgz"
        // buildImage = docker.build(imageTag, "--no-cache .")
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