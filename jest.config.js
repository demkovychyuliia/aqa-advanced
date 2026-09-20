export default {
  reporters: [
    'default',
    [
      'jest-html-reporter',
      {
        pageTitle: 'API Test Report',
        outputPath: './reports/test-report.html',
        includeFailureMsg: true,
        includeStackTrace: true,
      },
    ],
  ],
};
