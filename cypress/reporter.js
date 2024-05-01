const report = require("multiple-cucumber-html-reporter");
const fs = require("fs");


report.generate({
    jsonDir:"reports/html/",
    reportPath: "./cucumber-report/",
})