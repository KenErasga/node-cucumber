def imageName = "example-testing"

def imageTag = null

def dockerContainerId = null

def version = 'latest'

node {
    stage('Example Testing') {
        cleanWs()

        checkout scm

        imageTag = "${imageName}"

        sh "docker build . -t ${imageTag} --no-cache"
        def failed = false
        try {
            sh "docker run ${imageTag}"
        }
        catch(Exception ex) {
            println 'We have tests that failed!'
            failed = true
        }
        dockerContainerId = sh(script: "docker ps -aqf \"ancestor=${imageName}:latest\"", returnStdout: true).trim()

        sh "docker cp ${dockerContainerId}:/app/support/report/cucumber_report.html example_report.html"
        sh "docker cp ${dockerContainerId}:/app/support/report/cucumber_report.json example_report.json"

        cucumber "test_report.json"

        sh "aws s3 cp test_report s3//" // add to s3 bucket

        sh "docker rm ${dockerContainerId}"

        if(failed) {
            sh "exit 1"
        }
    }
}