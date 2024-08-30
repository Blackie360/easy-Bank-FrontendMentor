pipeline {
    agent any

    environment {
        // Define environment variables if needed
        SMTP_SERVER = 'smtp.gmail.com'
        SMTP_PORT = '587'
        EMAIL_RECIPIENT = 'felixkent360@gmail.com'
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building the code...'
                // Build automation tool
                sh 'mvn clean package' // Maven is used for Java projects
            }
        }

        stage('Unit and Integration Tests') {
            steps {
                echo 'Running unit and integration tests...'
                // Test automation tools
                sh 'mvn test' // JUnit or TestNG for testing
            }
        }

        stage('Code Analysis') {
            steps {
                echo 'Performing code analysis...'
                // Code analysis tool
                sh 'sonar-scanner' // SonarQube is used for code quality analysis
            }
        }

        stage('Security Scan') {
            steps {
                echo 'Performing security scan...'
                // Security scanning tool
                sh 'dependency-check --project test --scan .' // OWASP Dependency-Check
            }
        }

        stage('Deploy to Staging') {
            steps {
                echo 'Deploying to staging environment...'
                // Deployment tool
                sh 'aws deploy --environment staging' // AWS CLI for deployment
            }
        }

        stage('Integration Tests on Staging') {
            steps {
                echo 'Running integration tests on staging...'
                // Run integration tests in staging environment
                sh './run-integration-tests.sh' // Custom script for integration tests
            }
        }

        stage('Deploy to Production') {
            steps {
                echo 'Deploying to production...'
                // Deployment tool
                sh 'aws deploy --environment production' // AWS CLI for production deployment
            }
        }
    }

    post {
        always {
            emailext (
                to: "${env.EMAIL_RECIPIENT}",
                subject: "Pipeline ${currentBuild.fullDisplayName} completed",
                body: "Build finished with status: ${currentBuild.result}",
                attachmentsPattern: '**/target/logs/*.log'
            )
        }

        success {
            echo 'Build succeeded!'
        }

        failure {
            echo 'Build failed!'
        }
    }
}
