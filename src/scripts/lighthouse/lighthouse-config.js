module.exports = {
  extends: 'lighthouse:default',
  settings: {
    "budgets": [
      {
        "resourceSizes": [
          {
            "resourceType": "script",
            "budget": 300
          },
          {
            "resourceType": "image",
            "budget": 100
          },
          {
            "resourceType": "third-party",
            "budget": 200
          },
          {
            "resourceType": "total",
            "budget": 1000
          }
        ],
        "resourceCounts": [
          {
            "resourceType": "third-party",
            "budget": 10
          },
          {
            "resourceType": "total",
            "budget": 50
          }
        ]
      }
    ],
    onlyAudits: [
      // 'first-meaningful-paint',
      'speed-index',
      // 'first-cpu-idle',
      // 'interactive',
    ],
  },
};