pipeline {
    agent any

    environment {
        EMAIL_RECIPIENT = 'felixkent360@gmail.com' // Define your email recipient here
        // Add any other environment variables here
    }

    stages {
        stage('Checkout SCM') {
            steps {
                script {
                    echo 'Checking out the source code...'
                    checkout scm
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    echo 'Building the code...'
                    // Use npm for building a JavaScript project
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Unit and Integration Tests') {
            steps {
                script {
                    echo 'Running unit and integration tests...'
                    // Use npm for running tests
                    sh 'npm test'
                    sh 'npm run integration-test'
                }
            }
        }

        stage('Code Analysis') {
            steps {
                script {
                    echo 'Performing code analysis...'
                    // Use ESLint for JavaScript code analysis
                    sh 'npx eslint .'
                }
            }
        }

        stage('Security Scan') {
            steps {
                script {
                    echo 'Performing security scan...'
                    // Use Snyk for security scanning
                    sh 'npx snyk test'
                }
            }
        }

        stage('Deploy to Staging') {
            steps {
                script {
                    echo 'Deploying to staging server...'
                    // Deploy using Netlify CLI
                    sh 'netlify deploy --prod --dir=build'
                }
            }
        }

        stage('Integration Tests on Staging') {
            steps {
                script {
                    echo 'Running integration tests on staging...'
                    // Use a custom script for staging tests
                    sh './staging-tests.sh'
                }
            }
        }

        stage('Deploy to Production') {
            steps {
                script {
                    echo 'Deploying to production server...'
                    // Deploy to production using Netlify CLI
                    sh 'netlify deploy --prod --dir=build'
                }
            }
        }
    }

    post {
        success {
            emailext(
                subject: 'Build Successful',
                body: 'The build was successful. Check the build logs for more details.',
                to: "${EMAIL_RECIPIENT}"
            )
        }
        failure {
            emailext(
                subject: 'Build Failed',
                body: 'The build failed. Please check the logs for details.',
                to: "${EMAIL_RECIPIENT}"
            )
        }
    }
}
