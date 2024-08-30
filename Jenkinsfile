pipeline {
    agent any

    environment {
        EMAIL_RECIPIENT = 'felixkent360@gmail.com' // Define your email recipient here
        // Add any other environment variables here
    }

    stages {
        stage('Build') {
            steps {
                script {
                    echo 'Building the code...'
                    // Example: Use npm for building a JavaScript project
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }
        
        stage('Unit and Integration Tests') {
            steps {
                script {
                    echo 'Running unit and integration tests...'
                    // Example: Use npm for running tests
                    sh 'npm test'
                    sh 'npm run integration-test'
                }
            }
        }
        
        stage('Code Analysis') {
            steps {
                script {
                    echo 'Performing code analysis...'
                    // Example: Use ESLint for JavaScript code analysis
                    sh 'npx eslint .'
                }
            }
        }
        
        stage('Security Scan') {
            steps {
                script {
                    echo 'Performing security scan...'
                    // Example: Use Snyk for security scanning
                    sh 'npx snyk test'
                }
            }
        }
        
        stage('Deploy to Staging') {
            steps {
                script {
                    echo 'Deploying to staging server...'
                    // Example: Deploy using Netlify CLI
                    sh 'netlify deploy --prod --dir=build'
                }
            }
        }
        
        stage('Integration Tests on Staging') {
            steps {
                script {
                    echo 'Running integration tests on staging...'
                    // Example: Use a custom script for staging tests
                    sh './staging-tests.sh'
                }
            }
        }
        
        stage('Deploy to Production') {
            steps {
                script {
                    echo 'Deploying to production server...'
                    // Example: Deploy to production using Netlify CLI
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
