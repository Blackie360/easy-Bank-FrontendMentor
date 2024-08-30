pipeline {
    agent any
    environment {
        EMAIL_RECIPIENT = 'felixkent360@gmail.com'
        NETLIFY_AUTH_TOKEN = credentials('nfp_STCF7VJwsiVC7oyrjTRpxyyMjdWeFr5tcf0a') // Configure Netlify token in Jenkins credentials
        NETLIFY_SITE_ID = 'your-netlify-site-id' // Your Netlify site ID
    }
    stages {
        stage('Build') {
            steps {
                echo 'Stage 1: Build - Building the project...'
                // Add any build steps if needed
                // Example: If using a static site generator
                sh 'npm install'
            }
        }
        stage('Unit and Integration Tests') {
            steps {
                echo 'Stage 2: Unit and Integration Tests - Running tests...'
                // Example: Run JS unit tests using Jest
                sh 'npm test'
            }
        }
        stage('Code Analysis') {
            steps {
                echo 'Stage 3: Code Analysis - Analyzing code...'
                // Tool: ESLint for JavaScript code analysis
                sh 'npx eslint .'
            }
        }
        stage('Security Scan') {
            steps {
                echo 'Stage 4: Security Scan - Scanning for vulnerabilities...'
                // Tool: Snyk for JavaScript security scanning
                sh 'npx snyk test'
            }
        }
        stage('Deploy to Netlify') {
            steps {
                echo 'Stage 5: Deploy to Netlify - Deploying to Netlify...'
                // Deploy to Netlify using CLI
                sh 'netlify deploy --prod --site ${NETLIFY_SITE_ID} --auth ${NETLIFY_AUTH_TOKEN}'
            }
        }
        stage('Integration Tests on Production') {
            steps {
                echo 'Stage 6: Integration Tests on Production - Running integration tests...'
                // Integration tests might not be necessary for static sites, but you can run them if applicable
            }
        }
    }
    post {
        success {
            emailext (
                subject: 'Jenkins Build Success',
                body: 'The build was successful and deployed to Netlify. See the details in Jenkins.',
                to: "${EMAIL_RECIPIENT}"
            )
        }
        failure {
            emailext (
                subject: 'Jenkins Build Failure',
                body: 'The build failed. Check the Jenkins logs for more details.',
                to: "${EMAIL_RECIPIENT}",
                attachmentsPattern: '**/test-results/*.xml'
            )
        }
    }
}
