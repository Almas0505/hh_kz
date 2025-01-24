'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let skillData = []
    const skills = [
      'JavaScript', 'Python', 'Java', 'C++', 'Ruby', 'C#', 'PHP', 'HTML', 'CSS', 'React',
      'Node.js', 'Angular', 'Vue.js', 'SQL', 'NoSQL', 'MongoDB', 'MySQL', 'PostgreSQL', 'Docker', 'Kubernetes',
      'AWS', 'Azure', 'Google Cloud', 'Git', 'GitLab', 'Jenkins', 'CI/CD', 'Terraform', 'Ansible', 'Linux',
      'Bash', 'Nginx', 'Apache', 'DevOps', 'Machine Learning', 'Data Science', 'AI', 'Deep Learning', 'TensorFlow',
      'PyTorch', 'Keras', 'SQLAlchemy', 'Django', 'Flask', 'Express.js', 'MongoDB Atlas', 'Jira', 'Trello',
      'Asana', 'Slack', 'Microsoft Teams', 'Power BI', 'Tableau', 'Excel', 'Google Analytics', 'SEMrush', 'SEO',
      'SEM', 'Digital Marketing', 'Content Marketing', 'Copywriting', 'E-commerce', 'Shopify', 'WooCommerce', 'Magento',
      'Sales', 'Business Development', 'Branding', 'Social Media Marketing', 'TikTok Marketing', 'LinkedIn Marketing',
      'Instagram Marketing', 'Facebook Marketing', 'Pinterest Marketing', 'YouTube Marketing', 'SEO Audits',
      'Mobile App Development', 'iOS Development', 'Android Development', 'Swift', 'Kotlin', 'React Native', 'Flutter',
      'Xcode', 'Android Studio', 'Firebase for Mobile', 'AWS Mobile Services', 'Docker for Mobile', 'API Development',
      'RESTful APIs', 'GraphQL APIs', 'API Testing', 'Swagger', 'Postman', 'Cloud Computing', 'Big Data', 'Data Engineering',
      'Hadoop', 'Spark', 'Kafka', 'Apache Flink', 'Data Warehousing', 'ETL', 'PowerShell', 'Azure DevOps', 'Jenkins Pipelines',
      'Terraform for Azure', 'Kubernetes for Azure', 'Security', 'Cybersecurity', 'Penetration Testing', 'Risk Management',
      'Ethical Hacking', 'Firewalls', 'Encryption', 'SIEM', 'Endpoint Security', 'Cloud Security', 'Blockchain', 'Smart Contracts',
      'Cryptocurrency', 'Bitcoin', 'Ethereum', 'Solidity', 'NFTs', 'Decentralized Finance', 'Machine Learning Operations',
      'AI Operations'
    ];

    for (let i = 0; i < skills.length; i++) {
      skillData.push({name: skills[i]})
    }

    await queryInterface.bulkInsert('Skills',skillData, {})

  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Skills', null, {});
  },
};
