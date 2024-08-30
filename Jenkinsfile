pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building the code...'
                // Example: Use Maven as a build automation tool for Java projects
                sh 'mvn clean package'
            }
        }

        stage('Unit and Integration Tests') {
            steps {
                echo 'Running unit and integration tests...'
                // Example: Use JUnit or TestNG for testing Java applications
                sh 'mvn test'
            }
        }

        stage('Code Analysis') {
            steps {
                echo 'Performing code analysis...'
                // Example: Use SonarQube for code analysis
                sh 'sonar-scanner'
            }
        }

        stage('Security Scan') {
            steps {
                echo 'Performing security scan...'
                // Example: Use OWASP Dependency-Check for security vulnerabilities
                sh 'dependency-check --project test --scan .'
            }
        }

        stage('Deploy to Staging') {
            steps {
                echo 'Deploying to staging environment...'
                // Example: Use AWS CLI to deploy to AWS EC2
                sh 'aws ec2 deploy --environment staging'
            }
        }

        stage('Integration Tests on Staging') {
            steps {
                echo 'Running integration tests on staging...'
                // Run automated tests in the staging environment
                sh './run-integration-tests.sh'
            }
        }

        stage('Deploy to Production') {
            steps {
                echo 'Deploying to production...'
                // Example: Use AWS CLI to deploy to AWS EC2 production instance
                sh 'aws ec2 deploy --environment production'
            }
        }
    }

    post {
        always {
            echo 'Sending email notifications...'
            // Configure email notifications after test and security stages
            mail to: 'felixkent360@gmail.com',
                subject: "Pipeline ${currentBuild.fullDisplayName} completed",
                body: "Build finished with status: ${currentBuild.result}",
                attachmentsPattern: '**/target/logs/*.log'
        }
    }
}
