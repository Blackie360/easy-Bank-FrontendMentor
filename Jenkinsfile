pipeline {
    agent any

    stages {
        // Stage 1: Build
        stage('Build') {
            steps {
                echo 'Building the web project...'
                // Since it's a static site, there's no complex build process.
                // You could use a build tool like Webpack or any bundler if needed.
                // For simplicity, just echoing this step.
            }
        }

        // Stage 2: Unit and Integration Tests
        stage('Unit and Integration Tests') {
            steps {
                echo 'Running Unit Tests...'
                // If you had JavaScript tests (e.g., Jest, Mocha), you'd run them here.
                // Example for Jest (you need to install and set it up in your project)
                // sh 'npm test'
            }
        }

        // Stage 3: Code Analysis
        stage('Code Analysis') {
            steps {
                echo 'Running code analysis...'
                // Example: Run ESLint for JavaScript analysis
                sh 'npx eslint script.js'

                // Example: Run Stylelint for CSS analysis
                sh 'npx stylelint styles.css'
            }
        }

        // Stage 4: Security Scan
        stage('Security Scan') {
            steps {
                echo 'Running security scan...'
                // Example: Run npm audit (if using npm packages)
                // sh 'npm audit'
            }
        }

        // Stage 5: Deploy to Staging
        stage('Deploy to Staging') {
            steps {
                echo 'Deploying to Staging...'
                // Deploy the site to a staging server, for example, using SCP
                // sh 'scp -r * user@staging-server:/path/to/deploy'
            }
        }

        // Stage 6: Integration Tests on Staging
        stage('Integration Tests on Staging') {
            steps {
                echo 'Running integration tests on staging...'
                // Perform manual/automated tests in staging
            }
        }

        // Stage 7: Deploy to Production
        stage('Deploy to Production') {
            steps {
                echo 'Deploying to Production...'
                // Deploy the web project to production server
                // sh 'scp -r * user@production-server:/path/to/deploy'
            }
        }
    }

    // Email notification configuration
    post {
        always {
            echo 'Sending Email Notifications...'
            // Send email notification with build status
            mail to: 'your-email@example.com',
                 subject: "Pipeline Status: ${currentBuild.fullDisplayName}",
                 body: "The pipeline finished with status: ${currentBuild.result}"
        }
    }
}
