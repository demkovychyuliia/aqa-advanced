export default {
  reporters: [
    'default',
    [
      'jest-html-reporter',
      {
        pageTitle: 'JSONPlaceholder API Test Report',
        outputPath: './reports/test-report.html',
        includeFailureMsg: true,
        includeStackTrace: true,
      },
    ],
  ],
};
