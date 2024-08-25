pipeline {
    agent any

    environment {
        DIRECTORY_PATH = "${env.WORKSPACE}"
        TESTING_ENVIRONMENT = 'Staging'
        PRODUCTION_ENVIRONMENT = 'Blackie360Production'  // Customize the production environment name
    }

    stages {
        stage('Build') {
            steps {
                script {
                    echo "Fetching the source code from the directory path: ${env.DIRECTORY_PATH}"
                    echo "Compiling the code and generating any necessary artifacts"
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    echo "Running unit tests"
                    echo "Running integration tests"
                }
            }
        }

        stage('Code Quality Check') {
            steps {
                script {
                    echo "Checking the quality of the code"
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    echo "Deploying the application to the testing environment: ${env.TESTING_ENVIRONMENT}"
                }
            }
        }

        stage('Approval') {
            steps {
                script {
                    echo "Waiting for manual approval..."
                    sleep(time: 10, unit: 'SECONDS')  // Simulate approval with a sleep
                }
            }
        }

        stage('Deploy to Production') {
            steps {
                script {
                    echo "Deploying the application to the production environment: ${env.PRODUCTION_ENVIRONMENT}"
                }
            }
        }
    }

    post {
        always {
            echo "Pipeline execution complete"
        }
    }
}
