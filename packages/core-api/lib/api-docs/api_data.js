define({ "api": [
  {
    "type": "get",
    "url": "/api/v2/blocks/:id",
    "title": "Get Blocks By Id",
    "name": "GetBlockById",
    "version": "2.0.0",
    "group": "Blocks",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id blocks (Required)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://127.0.0.1:4003/api/v2/blocks/6402736103893238690",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Data blocks .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n {\n    \"data\": {\n        \"id\": \"58328125061111756\",\n        \"version\": 0,\n        \"height\": 3035362,\n        \"previous\": \"3741191868092856237\",\n        \"forged\": {\n            \"reward\": 200000000,\n            \"fee\": 0,\n            \"total\": 200000000\n        },\n        \"payload\": {\n            \"hash\": \"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855\",\n            \"length\": 0\n        },\n        \"generator\": {\n            \"username\": \"genesis_6\",\n            \"address\": \"D5e2FzTPqdEHridjzpFZCCVyepAu6Vpmk4\",\n            \"publicKey\": \"023e577a7b3362e0aba70e6911d230e86d729b4cb640f0e0b25637b812a3e38b53\"\n        },\n        \"signature\": \"3044022047aeb0c9cfbb5709aba4c177009bfdc7804ef597073fb9ca6cb614d7e3d1af2d02207234119d02ca26600ece045c59266945081b4c8237370576aaad7c61a09fe0ad\",\n        \"transactions\": 0,\n        \"timestamp\": {\n            \"epoch\": 32816544,\n            \"unix\": 1522917744,\n            \"human\": \"2018-04-05T08:42:24Z\"\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "Desktop/Know/core/packages/docs/block.js",
    "groupTitle": "Blocks"
  },
  {
    "type": "get",
    "url": "/api/v2/blocks",
    "title": "Get List Blocks",
    "name": "GetListBlocks",
    "version": "2.0.0",
    "group": "Blocks",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>The number of the page that will be returned. (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>The number of resources per page. (Optional)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://127.0.0.1:4003/api/v2/blocks",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>Meta data.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.count",
            "description": "<p>Limit.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.pageCount",
            "description": "<p>Total page.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.totalCount",
            "description": "<p>Total blocks.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.next",
            "description": "<p>Page next.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.previous",
            "description": "<p>Page previous.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.self",
            "description": "<p>Page current.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.first",
            "description": "<p>Page first.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.last",
            "description": "<p>Page last.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Array blocks .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n {\n    \"meta\": {\n        \"count\": 2,\n        \"pageCount\": 1517682,\n        \"totalCount\": 3035363,\n        \"next\": \"/v2/blocks?limit=2&page=2\",\n        \"previous\": null,\n        \"self\": \"/v2/blocks?limit=2&page=1\",\n        \"first\": \"/v2/blocks?limit=2&page=1\",\n        \"last\": \"/v2/blocks?limit=2&page=1517682\"\n    },\n    \"data\": [\n        {\n            \"id\": \"6402736103893238690\",\n            \"version\": 0,\n            \"height\": 3035363,\n            \"previous\": \"58328125061111756\",\n            \"forged\": {\n                \"reward\": 200000000,\n                \"fee\": 0,\n                \"total\": 200000000\n            },\n            \"payload\": {\n                \"hash\": \"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855\",\n                \"length\": 0\n            },\n            \"generator\": {\n                \"username\": \"shawmishrak\",\n                \"address\": \"D7P41dV7s259L3P7BVPNyqExqNDC7vdfx9\",\n                \"publicKey\": \"030fa94238eb63db0247a9bd6a3fd810f690b449ee9ce4eb654b94b22875a9a612\"\n            },\n            \"signature\": \"304402204d0dbeb4e71a99a0f128a3480350014f0a9f250818dae908edd15bce99f49be00220257bf240c5d8578e9ffe144e7dbf0c2259d34e6571e6a83402edc01daec6228e\",\n            \"transactions\": 0,\n            \"timestamp\": {\n                \"epoch\": 32816552,\n                \"unix\": 1522917752,\n                \"human\": \"2018-04-05T08:42:32Z\"\n            }\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "Desktop/Know/core/packages/docs/block.js",
    "groupTitle": "Blocks"
  },
  {
    "type": "get",
    "url": "/api/v2/blocks/:id/transactions",
    "title": "List all transactions of a block",
    "name": "ListAllTransactionsOfABlock",
    "version": "2.0.0",
    "group": "Blocks",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>The number of the page that will be returned. (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>The number of resources per page. (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id blocks (Required)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://127.0.0.1:4003/api/v2/blocks/:id/transactions",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>Meta data.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.pageCount",
            "description": "<p>Total page.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.totalCount",
            "description": "<p>Total blocks.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.next",
            "description": "<p>Page next.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.previous",
            "description": "<p>Page previous.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.self",
            "description": "<p>Page current.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.first",
            "description": "<p>Page first.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.last",
            "description": "<p>Page last.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Array transactions.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n {\n    \"meta\": {\n        \"count\": 1,\n        \"pageCount\": 1,\n        \"totalCount\": 1,\n        \"next\": null,\n        \"previous\": null,\n        \"self\": \"/v2/blocks/14126007750611341900/transactions?page=1\",\n        \"first\": \"/v2/blocks/14126007750611341900/transactions?page=1\",\n        \"last\": \"/v2/blocks/14126007750611341900/transactions?page=1\"\n    },\n    \"data\": [\n        {\n            \"id\": \"57415c61e6e7f10a6f9820d5124b3916f3c3a036b360f4802f0eb484f86f3369\",\n            \"blockId\": \"14126007750611341900\",\n            \"type\": 0,\n            \"amount\": 1000000000000000,\n            \"fee\": 10000000,\n            \"sender\": \"DGihocTkwDygiFvmg6aG8jThYTic47GzU9\",\n            \"recipient\": \"DRac35wghMcmUSe5jDMLBDLWkVVjyKZFxK\",\n            \"signature\": \"3045022100878335a71ab6769f3c1e2895041ad24d6c58cdcfe1151c639e65289e5287b0a8022010800bcfdc3223a9c59a6b014e8adf72f1c34df8a46afe655b021930b03e214e\",\n            \"vendorField\": \"yo\",\n            \"confirmations\": 3034848,\n            \"timestamp\": {\n                \"epoch\": 3909196,\n                \"unix\": 1494010396,\n                \"human\": \"2017-05-05T18:53:16Z\"\n            }\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "Desktop/Know/core/packages/docs/block.js",
    "groupTitle": "Blocks"
  },
  {
    "type": "POST",
    "url": "/api/v2/blocks/search",
    "title": "Search Blocks",
    "name": "SearchBlocks",
    "version": "2.0.0",
    "group": "Blocks",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>The number of the page that will be returned. (Optional)(Query)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>The number of resources per page. (Optional)(Query)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID blocks. (Optional)(Body)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "previousBlock",
            "description": "<p>PreviousBlock. (Optional)(Body)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "payloadHash",
            "description": "<p>PayloadHash blocks. (Optional)(Body)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "generatorPublicKey",
            "description": "<p>GeneratorPublicKey blocks. (Optional)(Body)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "blockSignature",
            "description": "<p>BlockSignature blocks. (Optional)(Body)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "timestamp",
            "description": "<p>Timestamp blocks. (Optional)(Body)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "timestamp.from",
            "description": "<p>From timestamp. (Optional)(Body)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "timestamp.to",
            "description": "<p>To timestamp. (Optional)(Body)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "height",
            "description": "<p>Height blocks. (Optional)(Body)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "height.from",
            "description": "<p>From height. (Optional)(Body)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "height.to",
            "description": "<p>To height. (Optional)(Body)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "numberOfTransactions",
            "description": "<p>NumberOfTransactions blocks. (Optional)(Body)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "numberOfTransactions.from",
            "description": "<p>From numberOfTransactions. (Optional)(Body)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "numberOfTransactions.to",
            "description": "<p>To numberOfTransactions. (Optional)(Body)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "totalAmount",
            "description": "<p>Total Amount blocks. (Optional)(Body)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "totalAmount.from",
            "description": "<p>From totalAmount. (Optional)(Body)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "totalAmount.to",
            "description": "<p>To totalAmount. (Optional)(Body)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "totalFee",
            "description": "<p>totalFee blocks. (Optional)(Body)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "totalFee.from",
            "description": "<p>From totalFee. (Optional)(Body)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "totalFee.to",
            "description": "<p>To totalFee. (Optional)(Body)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "reward",
            "description": "<p>reward blocks. (Optional)(Body)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "reward.from",
            "description": "<p>From reward. (Optional)(Body)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "reward.to",
            "description": "<p>To reward. (Optional)(Body)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "payloadLength",
            "description": "<p>payloadLength blocks. (Optional)(Body)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "payloadLength.from",
            "description": "<p>From payloadLength. (Optional)(Body)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "payloadLength.to",
            "description": "<p>To payloadLength. (Optional)(Body)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --header \"Content-Type: application/json\" --request POST --data '{\"id\":\"5c6ce775447a5acd22050d72e2615392494953bb1fb6287e9ffb3c33eaeb79aa\"}' http://127.0.0.1:4003/api/v2/transactions/search",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>Meta data.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.pageCount",
            "description": "<p>Total page.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.totalCount",
            "description": "<p>Total transactions.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.next",
            "description": "<p>Page next.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.previous",
            "description": "<p>Page previous.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.self",
            "description": "<p>Page current.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.first",
            "description": "<p>Page first.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.last",
            "description": "<p>Page last.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Array transactions.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n {\n    \"meta\": {\n        \"count\": 1,\n        \"pageCount\": 1,\n        \"totalCount\": 1,\n        \"next\": \"null\",\n        \"previous\": null,\n        \"self\": \"/v2/blocks/search?page=1\",\n        \"first\": \"/v2/blocks/search?page=1\",\n        \"last\": \"/v2/blocks/search?page=1\"\n    },\n    \"data\": [\n        {\n            \"id\": \"57415c61e6e7f10a6f9820d5124b3916f3c3a036b360f4802f0eb484f86f3369\",\n            \"blockId\": \"14126007750611341900\",\n            \"type\": 0,\n            \"amount\": 1000000000000000,\n            \"fee\": 10000000,\n            \"sender\": \"DGihocTkwDygiFvmg6aG8jThYTic47GzU9\",\n            \"recipient\": \"DRac35wghMcmUSe5jDMLBDLWkVVjyKZFxK\",\n            \"signature\": \"3045022100878335a71ab6769f3c1e2895041ad24d6c58cdcfe1151c639e65289e5287b0a8022010800bcfdc3223a9c59a6b014e8adf72f1c34df8a46afe655b021930b03e214e\",\n            \"vendorField\": \"yo\",\n            \"confirmations\": 3034848,\n            \"timestamp\": {\n                \"epoch\": 3909196,\n                \"unix\": 1494010396,\n                \"human\": \"2017-05-05T18:53:16Z\"\n            }\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "Desktop/Know/core/packages/docs/block.js",
    "groupTitle": "Blocks"
  },
  {
    "type": "get",
    "url": "/api/v2/delegates/:id/voters",
    "title": "List voters of a delegates",
    "name": "DelegatesVoters",
    "version": "2.0.0",
    "group": "Delegates",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>The number of the page that will be returned. (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>The number of resources per page. (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id delegates (Required)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://127.0.0.1:4003/api/v2/delegates/:id/voters",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>Meta data.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.pageCount",
            "description": "<p>Total page.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.totalCount",
            "description": "<p>Total voters.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.next",
            "description": "<p>Page next.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.previous",
            "description": "<p>Page previous.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.self",
            "description": "<p>Page current.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.first",
            "description": "<p>Page first.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.last",
            "description": "<p>Page last.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Array voters.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n    \"meta\": {\n        \"count\": 2,\n        \"pageCount\": 10,\n        \"totalCount\": 19,\n        \"next\": \"/v2/delegates/boldninja/voters?page=2\",\n        \"previous\": null,\n        \"self\": \"/v2/delegates/boldninja/voters?page=1\",\n        \"first\": \"/v2/delegates/boldninja/voters?page=1\",\n        \"last\": \"/v2/delegates/boldninja/voters?page=10\"\n    },\n    \"data\": [\n        {\n            \"address\": \"D5mbS6mpP5UheuciNscpDLgC127kYjRtkK\",\n            \"publicKey\": \"03f7e0b1ab14985990416f72ed0b206c20b9efa35156e4528c8ff749fa0eea5d5a\",\n            \"balance\": 400000000,\n            \"isDelegate\": false\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "Desktop/Know/core/packages/docs/delegate.js",
    "groupTitle": "Delegates"
  },
  {
    "type": "get",
    "url": "/api/v2/delegates/:id",
    "title": "Get Delegates By Id",
    "name": "GetDelegatesById",
    "version": "2.0.0",
    "group": "Delegates",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id delegate (Required)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://127.0.0.1:4003/api/v2/delegates/:id",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Data delegates .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n {\n    \"data\": {\n        \"username\": \"boldninja\",\n        \"address\": \"DARiJqhogp2Lu6bxufUFQQMuMyZbxjCydN\",\n        \"publicKey\": \"022cca9529ec97a772156c152a00aad155ee6708243e65c9d211a589cb5d43234d\",\n        \"votes\": 0,\n        \"blocks\": {\n            \"produced\": 0,\n            \"missed\": 0,\n            \"last\": {\n                \"id\": \"10652480998435361357\",\n                \"timestamp\": {\n                    \"epoch\": 32816112,\n                    \"unix\": 1522917312,\n                    \"human\": \"2018-04-05T08:35:12Z\"\n                }\n            }\n        },\n        \"production\": {\n            \"approval\": \"0.10\",\n            \"productivity\": \"0.00\"\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "Desktop/Know/core/packages/docs/delegate.js",
    "groupTitle": "Delegates"
  },
  {
    "type": "get",
    "url": "/api/v2/delegates",
    "title": "Get List Delegate",
    "name": "GetListDelegate",
    "version": "2.0.0",
    "group": "Delegates",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>The number of the page that will be returned. (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>The number of resources per page. (Optional)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://127.0.0.1:4003/api/v2/delegates",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>Meta data.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.count",
            "description": "<p>Limit.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.pageCount",
            "description": "<p>Total page.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.totalCount",
            "description": "<p>Total delegates.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.next",
            "description": "<p>Page next.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.previous",
            "description": "<p>Page previous.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.self",
            "description": "<p>Page current.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.first",
            "description": "<p>Page first.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.last",
            "description": "<p>Page last.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Array delegates .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n {\n    \"meta\": {\n        \"count\": 2,\n        \"pageCount\": 99,\n        \"totalCount\": 197,\n        \"next\": \"/v2/delegates?page=2\",\n        \"previous\": null,\n        \"self\": \"/v2/delegates?page=1\",\n        \"first\": \"/v2/delegates?page=1\",\n        \"last\": \"/v2/delegates?page=99\"\n    },\n    \"data\": [\n        {\n            \"username\": \"dark_jmc\",\n            \"address\": \"D5PXQVeJmchVrZFHL7cALZK8mWWzjCaVfz\",\n            \"publicKey\": \"02a9a0ac34a94f9d27fd9b4b56eb3c565a9a3f61e660f269775fb456f7f3301586\",\n            \"votes\": 0,\n            \"blocks\": {\n                \"produced\": 0,\n                \"missed\": 0,\n                \"last\": {\n                    \"id\": \"12383884455448354193\",\n                    \"timestamp\": {\n                        \"epoch\": 31784600,\n                        \"unix\": 1521885800,\n                        \"human\": \"2018-03-24T10:03:20Z\"\n                    }\n                }\n            },\n            \"production\": {\n                \"approval\": \"0.08\",\n                \"productivity\": \"0.00\"\n            }\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "Desktop/Know/core/packages/docs/delegate.js",
    "groupTitle": "Delegates"
  },
  {
    "type": "get",
    "url": "/api/v2/delegates/:id/blocks",
    "title": "List all block of a delegates",
    "name": "ListAllBlocksOfADelegates",
    "version": "2.0.0",
    "group": "Delegates",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>The number of the page that will be returned. (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>The number of resources per page. (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id delegates (Required)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://127.0.0.1:4003/api/v2/delegates/:id/blocks",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>Meta data.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.pageCount",
            "description": "<p>Total page.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.totalCount",
            "description": "<p>Total blocks.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.next",
            "description": "<p>Page next.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.previous",
            "description": "<p>Page previous.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.self",
            "description": "<p>Page current.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.first",
            "description": "<p>Page first.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.last",
            "description": "<p>Page last.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Array blocks.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n {\n    \"meta\": {\n        \"count\": 2,\n        \"pageCount\": 29919,\n        \"totalCount\": 59838,\n        \"next\": \"/v2/delegates/boldninja/blocks?page=2\",\n        \"previous\": null,\n        \"self\": \"/v2/delegates/boldninja/blocks?page=1\",\n        \"first\": \"/v2/delegates/boldninja/blocks?page=1\",\n        \"last\": \"/v2/delegates/boldninja/blocks?page=29919\"\n    },\n    \"data\": [\n        {\n            \"id\": \"10652480998435361357\",\n            \"version\": 0,\n            \"height\": 3035318,\n            \"previous\": \"12548322724277171379\",\n            \"forged\": {\n                \"reward\": 200000000,\n                \"fee\": 0,\n                \"total\": 200000000\n            },\n            \"payload\": {\n                \"hash\": \"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855\",\n                \"length\": 0\n            },\n            \"generator\": {\n                \"username\": \"boldninja\",\n                \"address\": \"DARiJqhogp2Lu6bxufUFQQMuMyZbxjCydN\",\n                \"publicKey\": \"022cca9529ec97a772156c152a00aad155ee6708243e65c9d211a589cb5d43234d\"\n            },\n            \"signature\": \"3044022034e754a3ff70adba6323517e1297c6a9f30176df2ac589661e9206fe60a203120220182c38da201fee20e803bb7725fe9618d6707547e6d7b757d4108f546934fe1c\",\n            \"transactions\": 0,\n            \"timestamp\": {\n                \"epoch\": 32816112,\n                \"unix\": 1522917312,\n                \"human\": \"2018-04-05T08:35:12Z\"\n            }\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "Desktop/Know/core/packages/docs/delegate.js",
    "groupTitle": "Delegates"
  },
  {
    "type": "get",
    "url": "/api/v2/node/configuration",
    "title": "Get Configuration",
    "name": "GetConfiguration",
    "version": "2.0.0",
    "group": "Node",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://127.0.0.1:4003/api/v2/node/configuration",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Config data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n    \"data\": {\n        \"nethash\": \"578e820911f24e039733b45e4882b73e301f813a0d2c31330dafda84534ffa23\",\n        \"token\": \"DARK\",\n        \"symbol\": \"DѦ\",\n        \"explorer\": \"https://dexplorer.ark.io\",\n        \"version\": 30,\n        \"ports\": {\n          \"@arkecosystem/core-p2p\": 4000,\n          \"@arkecosystem/core-api\": 4003,\n          \"@arkecosystem/core-graphql\": 4005,\n          \"@arkecosystem/core-json-rpc\": 8080\n        },\n        \"feeStatistics\": [\n          {\n            \"type\": 0,\n            \"fees\": {\n              \"minFee\": 268421,\n              \"maxFee\": 597781,\n              \"avgFee\": 404591\n            }\n          }\n        ],\n        \"constants\": {\n            \"height\": 75600,\n            \"reward\": 200000000,\n            \"activeDelegates\": 51,\n            \"blocktime\": 8,\n            \"block\": {\n                \"version\": 0,\n                \"maxTransactions\": 50,\n                \"maxPayload\": 2097152\n            },\n            \"epoch\": \"2017-03-21T13:00:00.000Z\",\n            \"fees\": {\n                \"send\": 10000000,\n                \"vote\": 100000000,\n                \"secondsignature\": 500000000,\n                \"delegate\": 2500000000,\n                \"multisignature\": 500000000\n            }\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "Desktop/Know/core/packages/docs/node.js",
    "groupTitle": "Node"
  },
  {
    "type": "get",
    "url": "/api/v2/node/syncing",
    "title": "Syncing Configuration",
    "name": "SyncingConfiguration",
    "version": "2.0.0",
    "group": "Node",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://127.0.0.1:4003/api/v2/node/syncing",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Status node data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n {\n    \"data\": {\n        \"synced\": false,\n        \"now\": 3034451,\n        \"blocksCount\": -36\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "Desktop/Know/core/packages/docs/node.js",
    "groupTitle": "Node"
  },
  {
    "type": "get",
    "url": "/api/v2/peers",
    "title": "Get List Peers",
    "name": "GetListPeers",
    "version": "2.0.0",
    "group": "Peers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>The number of the page that will be returned. (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>The number of resources per page. (Optional)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://127.0.0.1:4003/api/v2/peers",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>Meta data.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.count",
            "description": "<p>Limit</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.pageCount",
            "description": "<p>Total page.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.totalCount",
            "description": "<p>Total Peers.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.next",
            "description": "<p>Page next.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.previous",
            "description": "<p>Page previous.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.self",
            "description": "<p>Page current.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.first",
            "description": "<p>Page first.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.last",
            "description": "<p>Page last.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Array Peers .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n {\n    \"meta\": {\n        \"count\": 2,\n        \"pageCount\": 1,\n        \"totalCount\": 2,\n        \"next\": null,\n        \"previous\": null,\n        \"self\": \"/v2/peers?page=1\",\n        \"first\": \"/v2/peers?page=1\",\n        \"last\": \"/v2/peers?page=1\"\n    },\n    \"data\": [\n        {\n            \"ip\": \"167.114.29.53\",\n            \"port\": 4002,\n            \"version\": \"1.1.1\",\n            \"status\": \"OK\",\n            \"latency\": 1390\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "Desktop/Know/core/packages/docs/peer.js",
    "groupTitle": "Peers"
  },
  {
    "type": "get",
    "url": "/api/v2/peers/:ip",
    "title": "Get Status Peers",
    "name": "GetStatusPeer",
    "version": "2.0.0",
    "group": "Peers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ip",
            "description": "<p>IP peer. (Required)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://127.0.0.1:4003/api/v2/peers/167.114.29.55",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Status Peers .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n {\n    \"data\": {\n        \"ip\": \"167.114.29.55\",\n        \"port\": 4002,\n        \"version\": \"1.1.1\",\n        \"status\": \"OK\",\n        \"latency\": 355\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "Desktop/Know/core/packages/docs/peer.js",
    "groupTitle": "Peers"
  },
  {
    "type": "post",
    "url": "/api/v2/transactions",
    "title": "Add Transactions",
    "name": "AddTransactions",
    "version": "2.0.0",
    "group": "Transactions",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>The number of the page that will be returned. (Optional)(Param Query)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>The number of resources per page. (Optional)(Param Query)</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "transactions",
            "description": "<p>The list of transactions to create. (Required)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --header \"Content-Type: application/json\" --request POST --data '{\"transaction\":\"[.....]\"}' http://127.0.0.1:4003/api/v2/transactions",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Array transactions.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data.accept",
            "description": "<p>Accept transactions.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data.excess",
            "description": "<p>Excess transactions.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data.invalid",
            "description": "<p>Invalid transactions.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n    \"data\": {\n        \"accept\": [\n            \"15d4b3e933b79e5172bbf14c2bd3f92d927394cd8ebd102f18dcc2203af363ca\",\n            \"c48862c4df75a8b0859b559658c757c1c289088488630494fe51613db0747e57\",\n            \"bd10b25444363252e0787e46f5cac90797d08a0c34d507a10d064c94cccf6226\",\n            \"ba9e1d4ad2db9f860deef0e5d5c46bbd9f16222295aafd468e23d4f3d04cfbb8\",\n            \"27963debfa3ced1f606193e81fe3fae16c225c8607e0fd267266a448b5f38520\",\n            \"e9fffd1536f43f36840b8fa2793d4ac473db97bd864bdd54910b4de19fd954db\",\n            \"320111c0c0fd386907cd912e376690704ed118a559f86bd4e00e99db7b7ffc10\",\n            \"176a6d425828f6e7120b790cd77f2a447e3e9b2ccf20808dcc97f027b6dd0eba\",\n            \"dd7015b4bb3768e7ffc0c06a9b72f85f01abc69329e7990f864ebdc3daa1f9e3\",\n            \"dad91ecf3e547cd6b7d7868d1c18b99b88f1f8d2c16ed5f1a7e96eb5a0010c0d\"\n        ],\n        \"excess\": [],\n        \"invalid\": []\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "Desktop/Know/core/packages/docs/transaction.js",
    "groupTitle": "Transactions"
  },
  {
    "type": "get",
    "url": "/api/v2/transactions",
    "title": "Get Transactions",
    "name": "GetTransactions",
    "version": "2.0.0",
    "group": "Transactions",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>The number of the page that will be returned. (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>The number of resources per page. (Optional)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://127.0.0.1:4003/api/v2/transactions",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>Meta data.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.count",
            "description": "<p>Limit.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.pageCount",
            "description": "<p>Total page.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.totalCount",
            "description": "<p>Total transactions.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.next",
            "description": "<p>Page next.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.previous",
            "description": "<p>Page previous.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.self",
            "description": "<p>Page current.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.first",
            "description": "<p>Page first.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.last",
            "description": "<p>Page last.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Array transactions.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n {\n    \"meta\": {\n        \"count\": 1,\n        \"pageCount\": 127430,\n        \"totalCount\": 254860,\n        \"next\": \"/v2/transactions?page=2\",\n        \"previous\": null,\n        \"self\": \"/v2/transactions?page=1\",\n        \"first\": \"/v2/transactions?page=1\",\n        \"last\": \"/v2/transactions?page=127430\"\n    },\n    \"data\": [\n        {\n            \"id\": \"5c6ce775447a5acd22050d72e2615392494953bb1fb6287e9ffb3c33eaeb79aa\",\n            \"blockId\": \"4271682877946294396\",\n            \"type\": 0,\n            \"amount\": 32106400000,\n            \"fee\": 10000000,\n            \"sender\": \"DDiTHZ4RETZhGxcyAi1VruCXZKxBFqXMeh\",\n            \"recipient\": \"DQnQNoJuNCvpjYhxL7fsnGepHBqrumgsyP\",\n            \"signature\": \"3044022047c39f6f45a46a87f91ca867f9551dbebf0035adcfcbdc1370222c7a1517fc0002206fb5ecc10460e0352a8b626a508e2fcc76e39e490b0a2581dd772ebc8079696e\",\n            \"confirmations\": 1924,\n            \"timestamp\": {\n                \"epoch\": 32794053,\n                \"unix\": 1522895253,\n                \"human\": \"2018-04-05T02:27:33Z\"\n            }\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "Desktop/Know/core/packages/docs/transaction.js",
    "groupTitle": "Transactions"
  },
  {
    "type": "get",
    "url": "/api/v2/transactions/:id",
    "title": "Get Transactions By Id",
    "name": "GetTransactionsById",
    "version": "2.0.0",
    "group": "Transactions",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id transactions (Required)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://127.0.0.1:4003/api/v2/transactions/5c6ce775447a5acd22050d72e2615392494953bb1fb6287e9ffb3c33eaeb79aa",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Information transactions.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>ID transactions.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.blockId",
            "description": "<p>ID block.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.type",
            "description": "<p>Type transactions.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.amount",
            "description": "<p>Amount transactions.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.fee",
            "description": "<p>Fee transactions.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.sender",
            "description": "<p>Sender transactions.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.recipient",
            "description": "<p>Recipient transactions.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.signature",
            "description": "<p>Signature sender.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.confirmations",
            "description": "<p>Confirmations transactions.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.timestamp",
            "description": "<p>Timestamp transactions.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n {\n    \"data\": {\n        \"id\": \"5c6ce775447a5acd22050d72e2615392494953bb1fb6287e9ffb3c33eaeb79aa\",\n        \"blockId\": \"4271682877946294396\",\n        \"type\": 0,\n        \"amount\": 32106400000,\n        \"fee\": 10000000,\n        \"sender\": \"DDiTHZ4RETZhGxcyAi1VruCXZKxBFqXMeh\",\n        \"recipient\": \"DQnQNoJuNCvpjYhxL7fsnGepHBqrumgsyP\",\n        \"signature\": \"3044022047c39f6f45a46a87f91ca867f9551dbebf0035adcfcbdc1370222c7a1517fc0002206fb5ecc10460e0352a8b626a508e2fcc76e39e490b0a2581dd772ebc8079696e\",\n        \"confirmations\": 1928,\n        \"timestamp\": {\n            \"epoch\": 32794053,\n            \"unix\": 1522895253,\n            \"human\": \"2018-04-05T02:27:33Z\"\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "Desktop/Know/core/packages/docs/transaction.js",
    "groupTitle": "Transactions"
  },
  {
    "type": "get",
    "url": "/api/v2/transactions/unconfirmed",
    "title": "Get Transactions Unconfirmed",
    "name": "GetTransactionsUnconfirmed",
    "version": "2.0.0",
    "group": "Transactions",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>The number of the page that will be returned. (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>The number of resources per page. (Optional)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://127.0.0.1:4003/api/v2/transactions/unconfirmed",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>Meta data.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.count",
            "description": "<p>Total transactions.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.pageCount",
            "description": "<p>Total page.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.totalCount",
            "description": "<p>Total transactions.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.next",
            "description": "<p>Page next.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.previous",
            "description": "<p>Page previous.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.self",
            "description": "<p>Page current.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.first",
            "description": "<p>Page first.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.last",
            "description": "<p>Page last.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Array transactions.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n {\n    \"meta\": {\n        \"count\": 1,\n        \"pageCount\": 127430,\n        \"totalCount\": 254860,\n        \"next\": \"/v2/transactions?page=2\",\n        \"previous\": null,\n        \"self\": \"/v2/transactions?page=1\",\n        \"first\": \"/v2/transactions?page=1\",\n        \"last\": \"/v2/transactions?page=127430\"\n    },\n    \"data\": [\n        {\n            \"id\": \"5c6ce775447a5acd22050d72e2615392494953bb1fb6287e9ffb3c33eaeb79aa\",\n            \"blockId\": \"4271682877946294396\",\n            \"type\": 0,\n            \"amount\": 32106400000,\n            \"fee\": 10000000,\n            \"sender\": \"DDiTHZ4RETZhGxcyAi1VruCXZKxBFqXMeh\",\n            \"recipient\": \"DQnQNoJuNCvpjYhxL7fsnGepHBqrumgsyP\",\n            \"signature\": \"3044022047c39f6f45a46a87f91ca867f9551dbebf0035adcfcbdc1370222c7a1517fc0002206fb5ecc10460e0352a8b626a508e2fcc76e39e490b0a2581dd772ebc8079696e\",\n            \"confirmations\": 0,\n            \"timestamp\": {\n                \"epoch\": 32794053,\n                \"unix\": 1522895253,\n                \"human\": \"2018-04-05T02:27:33Z\"\n            }\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "Desktop/Know/core/packages/docs/transaction.js",
    "groupTitle": "Transactions"
  },
  {
    "type": "get",
    "url": "/api/v2/transactions/unconfirmed/:id",
    "title": "Get Transactions Unconfirmed By Id",
    "name": "GetTransactionsUnconfirmedById",
    "version": "2.0.0",
    "group": "Transactions",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id transactions (Required)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://127.0.0.1:4003/api/v2/transactions/unconfirmed/5c6ce775447a5acd22050d72e2615392494953bb1fb6287e9ffb3c33eaeb79aa",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Information transactions.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>ID transactions.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.blockId",
            "description": "<p>ID block.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.type",
            "description": "<p>Type transactions.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.amount",
            "description": "<p>Amount transactions.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.fee",
            "description": "<p>Fee transactions.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.sender",
            "description": "<p>Sender transactions.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.recipient",
            "description": "<p>Recipient transactions.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.signature",
            "description": "<p>Signature sender.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.confirmations",
            "description": "<p>Confirmations transactions.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.timestamp",
            "description": "<p>Timestamp transactions.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n {\n    \"data\": {\n        \"id\": \"5c6ce775447a5acd22050d72e2615392494953bb1fb6287e9ffb3c33eaeb79aa\",\n        \"blockId\": \"4271682877946294396\",\n        \"type\": 0,\n        \"amount\": 32106400000,\n        \"fee\": 10000000,\n        \"sender\": \"DDiTHZ4RETZhGxcyAi1VruCXZKxBFqXMeh\",\n        \"recipient\": \"DQnQNoJuNCvpjYhxL7fsnGepHBqrumgsyP\",\n        \"signature\": \"3044022047c39f6f45a46a87f91ca867f9551dbebf0035adcfcbdc1370222c7a1517fc0002206fb5ecc10460e0352a8b626a508e2fcc76e39e490b0a2581dd772ebc8079696e\",\n        \"confirmations\": 0,\n        \"timestamp\": {\n            \"epoch\": 32794053,\n            \"unix\": 1522895253,\n            \"human\": \"2018-04-05T02:27:33Z\"\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "Desktop/Know/core/packages/docs/transaction.js",
    "groupTitle": "Transactions"
  },
  {
    "type": "get",
    "url": "/api/v2/transactions/types",
    "title": "Get List Types Transactions",
    "name": "ListTypeTransaction",
    "version": "2.0.0",
    "group": "Transactions",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://127.0.0.1:4003/api/v2/transactions/types",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Object data type.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n {\n    \"data\": {\n        \"TRANSFER\": 0,\n        \"SECOND_SIGNATURE\": 1,\n        \"DELEGATE\": 2,\n        \"VOTE\": 3,\n        \"MULTI_SIGNATURE\": 4,\n        \"IPFS\": 5,\n        \"TIMELOCK_TRANSFER\": 6,\n        \"MULTI_PAYMENT\": 7,\n        \"DELEGATE_RESIGNATION\": 8\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "Desktop/Know/core/packages/docs/transaction.js",
    "groupTitle": "Transactions"
  },
  {
    "type": "POST",
    "url": "/api/v2/transactions/search",
    "title": "Search Transactions",
    "name": "SearchTransactions",
    "version": "2.0.0",
    "group": "Transactions",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>The number of the page that will be returned. (Optional)(Query)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>The number of resources per page. (Optional)(Query)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID transactions. (Optional)(Body)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "blockId",
            "description": "<p>BlockId transaction. (Optional)(Body)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>Type transaction. (Optional)(Body)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "senderPublicKey",
            "description": "<p>SenderPublicKey transaction. (Optional)(Body)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recipientId",
            "description": "<p>RecipientId transaction. (Optional)(Body)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vendorField",
            "description": "<p>VendorField transaction. (Optional)(Body)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "timestamp",
            "description": "<p>Timestamp transaction. (Optional)(Body)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "timestamp.from",
            "description": "<p>From timestamp. (Optional)(Body)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "timestamp.to",
            "description": "<p>To timestamp. (Optional)(Body)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "amount",
            "description": "<p>Amount transaction. (Optional)(Body)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "amount.from",
            "description": "<p>From amount. (Optional)(Body)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "amount.to",
            "description": "<p>To amount. (Optional)(Body)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "fee",
            "description": "<p>Fee transaction. (Optional)(Body)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "fee.from",
            "description": "<p>From fee. (Optional)(Body)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "fee.to",
            "description": "<p>To fee. (Optional)(Body)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --header \"Content-Type: application/json\" --request POST --data '{\"id\":\"5c6ce775447a5acd22050d72e2615392494953bb1fb6287e9ffb3c33eaeb79aa\"}' http://127.0.0.1:4003/api/v2/transactions/search",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>Meta data.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.count",
            "description": "<p>Limit.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.pageCount",
            "description": "<p>Total page.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.totalCount",
            "description": "<p>Total transactions.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.next",
            "description": "<p>Page next.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.previous",
            "description": "<p>Page previous.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.self",
            "description": "<p>Page current.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.first",
            "description": "<p>Page first.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.last",
            "description": "<p>Page last.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Array transactions.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n {\n    \"meta\": {\n        \"count\": 1,\n        \"pageCount\": 127430,\n        \"totalCount\": 254860,\n        \"next\": \"null\",\n        \"previous\": null,\n        \"self\": \"/v2/transactions/search?page=1\",\n        \"first\": \"/v2/transactions/search?page=1\",\n        \"last\": \"/v2/transactions/search?page=1\"\n    },\n    \"data\": [\n        {\n            \"id\": \"5c6ce775447a5acd22050d72e2615392494953bb1fb6287e9ffb3c33eaeb79aa\",\n            \"blockId\": \"4271682877946294396\",\n            \"type\": 0,\n            \"amount\": 32106400000,\n            \"fee\": 10000000,\n            \"sender\": \"DDiTHZ4RETZhGxcyAi1VruCXZKxBFqXMeh\",\n            \"recipient\": \"DQnQNoJuNCvpjYhxL7fsnGepHBqrumgsyP\",\n            \"signature\": \"3044022047c39f6f45a46a87f91ca867f9551dbebf0035adcfcbdc1370222c7a1517fc0002206fb5ecc10460e0352a8b626a508e2fcc76e39e490b0a2581dd772ebc8079696e\",\n            \"confirmations\": 1924,\n            \"timestamp\": {\n                \"epoch\": 32794053,\n                \"unix\": 1522895253,\n                \"human\": \"2018-04-05T02:27:33Z\"\n            }\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "Desktop/Know/core/packages/docs/transaction.js",
    "groupTitle": "Transactions"
  },
  {
    "type": "get",
    "url": "/api/v2/votes/:id",
    "title": "Get Information Vote",
    "name": "GetInformationVote",
    "version": "2.0.0",
    "group": "Votes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID Voter. (Required)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://127.0.0.1:4003/api/v2/votes/beb8dd43c640f562704090159154b2742afba7eacada9e8edee447e34e7675c6",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Information Vote .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n {\n    \"data\": {\n        \"id\": \"beb8dd43c640f562704090159154b2742afba7eacada9e8edee447e34e7675c6\",\n        \"blockId\": \"13661015019049808045\",\n        \"type\": 3,\n        \"amount\": 0,\n        \"fee\": 100000000,\n        \"sender\": \"DAp7JjULVgqzd4jLofkUyLRovHRPUTQwiZ\",\n        \"recipient\": \"DAp7JjULVgqzd4jLofkUyLRovHRPUTQwiZ\",\n        \"signature\": \"3045022100e9a743c5aa0df427f49af61d35fe617182479f7e8d368ce23b7ec43ab6d269c80220193aafd4ccb3eedbd76ded7ea99f31629013dc3af60540029fe98b274d42d284\",\n        \"asset\": {\n            \"votes\": [\n                \"+032fe001dff675a6edfe3d0e51201b2900d3b5050a46d770306aefaa574c022672\"\n            ]\n        },\n        \"confirmations\": 48189,\n        \"timestamp\": {\n            \"epoch\": 32338609,\n            \"unix\": 1522439809,\n            \"human\": \"2018-03-30T19:56:49Z\"\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "Desktop/Know/core/packages/docs/vote.js",
    "groupTitle": "Votes"
  },
  {
    "type": "get",
    "url": "/api/v2/votes",
    "title": "Get List Votes",
    "name": "GetListVotes",
    "version": "2.0.0",
    "group": "Votes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>The number of the page that will be returned. (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>The number of resources per page. (Optional)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://127.0.0.1:4003/api/v2/votes",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>Meta data.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.count",
            "description": "<p>Limit</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.pageCount",
            "description": "<p>Total page.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.totalCount",
            "description": "<p>Total Votes.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.next",
            "description": "<p>Page next.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.previous",
            "description": "<p>Page previous.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.self",
            "description": "<p>Page current.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.first",
            "description": "<p>Page first.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.last",
            "description": "<p>Page last.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Array Votes .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n  \"meta\": {\n         \"count\": 2,\n         \"pageCount\": 658,\n         \"totalCount\": 1315,\n         \"next\": \"/v2/votes?page=2\",\n         \"previous\": null,\n         \"self\": \"/v2/votes?page=1\",\n         \"first\": \"/v2/votes?page=1\",\n         \"last\": \"/v2/votes?page=658\"\n     },\n  \"data\": [\n  {\n      \"id\": \"560959e435cbf8eec60691890f3dd55d141e76077e1fe803f65d137c91099240\",\n      \"blockId\": \"12872155462883631430\",\n      \"type\": 3,\n      \"amount\": 0,\n      \"fee\": 100000000,\n      \"sender\": \"DAp7JjULVgqzd4jLofkUyLRovHRPUTQwiZ\",\n      \"recipient\": \"DAp7JjULVgqzd4jLofkUyLRovHRPUTQwiZ\",\n      \"signature\": \"30440220522eadff84b5b4b2fc6a3ef611bf093dbd0a06963c32c767ee28729898d0a1d302203f851594e5b2271a987e98daa4fc8b5f384fac65c41eb1c43739af2d4b5dc902\",\n      \"asset\": {\n          \"votes\": [\n              \"-032fe001dff675a6edfe3d0e51201b2900d3b5050a46d770306aefaa574c022672\"\n          ]\n      },\n      \"confirmations\": 39989,\n      \"timestamp\": {\n          \"epoch\": 32414926,\n          \"unix\": 1522516126,\n          \"human\": \"2018-03-31T17:08:46Z\"\n      }\n  }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "Desktop/Know/core/packages/docs/vote.js",
    "groupTitle": "Votes"
  },
  {
    "type": "get",
    "url": "/api/v2/wallets/:id",
    "title": "Get Information Wallets",
    "name": "GetInformationWallets",
    "version": "2.0.0",
    "group": "Wallets",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID Wallets. (Required)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://127.0.0.1:4003/api/v2/wallets/beb8dd43c640f562704090159154b2742afba7eacada9e8edee447e34e7675c6",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Information Vote .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n {\n    \"data\": {\n        \"id\": \"beb8dd43c640f562704090159154b2742afba7eacada9e8edee447e34e7675c6\",\n        \"blockId\": \"13661015019049808045\",\n        \"type\": 3,\n        \"amount\": 0,\n        \"fee\": 100000000,\n        \"sender\": \"DAp7JjULVgqzd4jLofkUyLRovHRPUTQwiZ\",\n        \"recipient\": \"DAp7JjULVgqzd4jLofkUyLRovHRPUTQwiZ\",\n        \"signature\": \"3045022100e9a743c5aa0df427f49af61d35fe617182479f7e8d368ce23b7ec43ab6d269c80220193aafd4ccb3eedbd76ded7ea99f31629013dc3af60540029fe98b274d42d284\",\n        \"asset\": {\n            \"votes\": [\n                \"+032fe001dff675a6edfe3d0e51201b2900d3b5050a46d770306aefaa574c022672\"\n            ]\n        },\n        \"confirmations\": 48189,\n        \"timestamp\": {\n            \"epoch\": 32338609,\n            \"unix\": 1522439809,\n            \"human\": \"2018-03-30T19:56:49Z\"\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "Desktop/Know/core/packages/docs/wallet.js",
    "groupTitle": "Wallets"
  },
  {
    "type": "get",
    "url": "/api/v2/wallets",
    "title": "Get List Wallets",
    "name": "GetListWallet",
    "version": "2.0.0",
    "group": "Wallets",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>The number of the page that will be returned. (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>The number of resources per page. (Optional)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://127.0.0.1:4003/api/v2/wallets",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>Meta data.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.count",
            "description": "<p>Limit</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.pageCount",
            "description": "<p>Total page.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.totalCount",
            "description": "<p>Total Wallets.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.next",
            "description": "<p>Page next.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.previous",
            "description": "<p>Page previous.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.self",
            "description": "<p>Page current.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.first",
            "description": "<p>Page first.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.last",
            "description": "<p>Page last.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Array Wallets .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n    \"meta\": {\n        \"count\": 2,\n        \"pageCount\": 421,\n        \"totalCount\": 841,\n        \"next\": \"/v2/wallets?page=2\",\n        \"previous\": null,\n        \"self\": \"/v2/wallets?page=1\",\n        \"first\": \"/v2/wallets?page=1\",\n        \"last\": \"/v2/wallets?page=421\"\n    },\n    \"data\": [\n        {\n            \"address\": \"D59NTfV92ca9QevUydvMiFMFdubbCaAVCV\",\n            \"publicKey\": \"037d035f08b3bad0d5bb605232c7aa41555693c480044dbeb797270a44c339da5a\",\n            \"balance\": 1023145260990,\n            \"isDelegate\": false\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "Desktop/Know/core/packages/docs/wallet.js",
    "groupTitle": "Wallets"
  },
  {
    "type": "get",
    "url": "/api/v2/wallets/top",
    "title": "Get Top Wallets",
    "name": "GetTopWallets",
    "version": "2.0.0",
    "group": "Wallets",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>The number of the page that will be returned. (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>The number of resources per page. (Optional)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://127.0.0.1:4003/api/v2/wallets/top",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Array Wallets .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n {\n    \"data\": [\n        {\n            \"address\": \"DGihocTkwDygiFvmg6aG8jThYTic47GzU9\",\n            \"publicKey\": \"024c8247388a02ecd1de2a3e3fd5b7c61ecc2797fa3776599d558333ef1802d231\",\n            \"balance\": 11499593462120632,\n            \"isDelegate\": false\n        },\n        {\n            \"address\": \"DRac35wghMcmUSe5jDMLBDLWkVVjyKZFxK\",\n            \"publicKey\": \"0374e9a97611540a9ce4812b0980e62d3c5141ea964c2cab051f14a78284570dcd\",\n            \"balance\": 554107676293547,\n            \"isDelegate\": false\n        },\n        ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "Desktop/Know/core/packages/docs/wallet.js",
    "groupTitle": "Wallets"
  },
  {
    "type": "get",
    "url": "/api/v2/wallets/search",
    "title": "Get Top Wallets",
    "name": "GetTopWallets",
    "version": "2.0.0",
    "group": "Wallets",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>The number of the page that will be returned. (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>The number of resources per page. (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address wallet. (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "publicKey",
            "description": "<p>publicKey wallet. (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "secondPublicKey",
            "description": "<p>secondPublicKey wallet. (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vote",
            "description": "<p>Vote wallet. (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username wallet. (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "balance",
            "description": "<p>Balance wallet. (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "balance.from",
            "description": "<p>From balance. (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "balance.to",
            "description": "<p>To balance. (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "votebalance",
            "description": "<p>Votebalance wallet. (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "votebalance.from",
            "description": "<p>From Votebalance. (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "votebalance.to",
            "description": "<p>To Votebalance. (Optional)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://127.0.0.1:4003/api/v2/wallets/search",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Array Wallets .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n {\n    \"meta\": {\n        \"count\": 2,\n        \"pageCount\": 2,\n        \"totalCount\": 3,\n        \"next\": \"/v2/wallets/search?page=2\",\n        \"previous\": null,\n        \"self\": \"/v2/wallets/search?page=1\",\n        \"first\": \"/v2/wallets/search?page=1\",\n        \"last\": \"/v2/wallets/search?page=2\"\n    },\n    \"data\": [\n        {\n            \"id\": \"08c6b23f9edd97b613f17153fb97a316a4fb83136e9842655dafc8262f363e0e\",\n            \"blockId\": \"14847399772737279404\",\n            \"type\": 3,\n            \"amount\": 0,\n            \"fee\": 100000000,\n            \"sender\": \"DARiJqhogp2Lu6bxufUFQQMuMyZbxjCydN\",\n            \"recipient\": \"DARiJqhogp2Lu6bxufUFQQMuMyZbxjCydN\",\n            \"signature\": \"304402207ba0e8aaee93695360081b7ce713f13d62b544038ac440bd46357398af86cae6022059ac74586738be1ef622e0baba992d0e417d9aed7ab980f374eb0c9d53e25f8e\",\n            \"asset\": {\n                \"votes\": [\n                    \"+0257b7724e97cd832e0c28533a86da5220656f9b5122141daab20e8526decce01f\"\n                ]\n            },\n            \"confirmations\": 1636029,\n            \"timestamp\": {\n                \"epoch\": 17094358,\n                \"unix\": 1507195558,\n                \"human\": \"2017-10-05T09:25:58Z\"\n            }\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "Desktop/Know/core/packages/docs/wallet.js",
    "groupTitle": "Wallets"
  },
  {
    "type": "get",
    "url": "/api/v2/wallets/:address/transactions",
    "title": "Get Transactions of Wallets",
    "name": "GetTransactionsOfWallets",
    "version": "2.0.0",
    "group": "Wallets",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>The number of the page that will be returned. (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>The number of resources per page. (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address Wallets. (Required)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://127.0.0.1:4003/api/v2/wallets/DDiTHZ4RETZhGxcyAi1VruCXZKxBFqXMeh/transactions",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>Meta data.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.count",
            "description": "<p>Limit</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.pageCount",
            "description": "<p>Total page.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.totalCount",
            "description": "<p>Total Wallets.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.next",
            "description": "<p>Page next.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.previous",
            "description": "<p>Page previous.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.self",
            "description": "<p>Page current.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.first",
            "description": "<p>Page first.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.last",
            "description": "<p>Page last.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Array Wallets .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n {\n    \"meta\": {\n        \"count\": 2,\n        \"pageCount\": 127430,\n        \"totalCount\": 254860,\n        \"next\": \"/v2/wallets/boldninja/transactions?page=2\",\n        \"previous\": null,\n        \"self\": \"/v2/wallets/boldninja/transactions?page=1\",\n        \"first\": \"/v2/wallets/boldninja/transactions?page=1\",\n        \"last\": \"/v2/wallets/boldninja/transactions?page=127430\"\n    },\n    \"data\": [\n        {\n            \"id\": \"5c6ce775447a5acd22050d72e2615392494953bb1fb6287e9ffb3c33eaeb79aa\",\n            \"blockId\": \"4271682877946294396\",\n            \"type\": 0,\n            \"amount\": 32106400000,\n            \"fee\": 10000000,\n            \"sender\": \"DDiTHZ4RETZhGxcyAi1VruCXZKxBFqXMeh\",\n            \"recipient\": \"DQnQNoJuNCvpjYhxL7fsnGepHBqrumgsyP\",\n            \"signature\": \"3044022047c39f6f45a46a87f91ca867f9551dbebf0035adcfcbdc1370222c7a1517fc0002206fb5ecc10460e0352a8b626a508e2fcc76e39e490b0a2581dd772ebc8079696e\",\n            \"confirmations\": 1683,\n            \"timestamp\": {\n                \"epoch\": 32794053,\n                \"unix\": 1522895253,\n                \"human\": \"2018-04-05T02:27:33Z\"\n            }\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "Desktop/Know/core/packages/docs/wallet.js",
    "groupTitle": "Wallets"
  },
  {
    "type": "get",
    "url": "/api/v2/wallets/:address/transactions/received",
    "title": "Get Transactions Received of Wallets",
    "name": "GetTransactionsReceivedOfWallets",
    "version": "2.0.0",
    "group": "Wallets",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>The number of the page that will be returned. (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>The number of resources per page. (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address Wallets. (Required)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://127.0.0.1:4003/api/v2/wallets/DARiJqhogp2Lu6bxufUFQQMuMyZbxjCydN/transactions/received",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>Meta data.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.count",
            "description": "<p>Limit</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.pageCount",
            "description": "<p>Total page.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.totalCount",
            "description": "<p>Total Wallets.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.next",
            "description": "<p>Page next.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.previous",
            "description": "<p>Page previous.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.self",
            "description": "<p>Page current.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.first",
            "description": "<p>Page first.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.last",
            "description": "<p>Page last.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Array Transactions .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n {\n    \"meta\": {\n        \"count\": 2,\n        \"pageCount\": 4,\n        \"totalCount\": 8,\n        \"next\": \"/v2/wallets/boldninja/transactions/received?page=2\",\n        \"previous\": null,\n        \"self\": \"/v2/wallets/boldninja/transactions/received?page=1\",\n        \"first\": \"/v2/wallets/boldninja/transactions/received?page=1\",\n        \"last\": \"/v2/wallets/boldninja/transactions/received?page=4\"\n    },\n    \"data\": [\n        {\n            \"id\": \"c46a6a83f7a358f269691c16f050beeab669767643634086bc12ad1182d54413\",\n            \"blockId\": \"17271524574301696572\",\n            \"type\": 0,\n            \"amount\": 5000000000,\n            \"fee\": 10000000,\n            \"sender\": \"DK6Q1Lufhb939H9EshLViYbaaKUkswMiUz\",\n            \"recipient\": \"DARiJqhogp2Lu6bxufUFQQMuMyZbxjCydN\",\n            \"signature\": \"304402204b81411e507273f2a27e6135510abda5bff00a0d3121977df09363227c8fd2360220503cab4484a7db785d91a7adcfad681811e3d73f2d00b4dab7e4190ecd41cb34\",\n            \"vendorField\": \"More monopoly money for EVERYONE!!\",\n            \"confirmations\": 1482069,\n            \"timestamp\": {\n                \"epoch\": 18382414,\n                \"unix\": 1508483614,\n                \"human\": \"2017-10-20T07:13:34Z\"\n            }\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "Desktop/Know/core/packages/docs/wallet.js",
    "groupTitle": "Wallets"
  },
  {
    "type": "get",
    "url": "/api/v2/wallets/:address/transactions/sent",
    "title": "Get Transactions Sent of Wallets",
    "name": "GetTransactionsSentOfWallets",
    "version": "2.0.0",
    "group": "Wallets",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>The number of the page that will be returned. (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>The number of resources per page. (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address Wallets. (Required)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://127.0.0.1:4003/api/v2/wallets/DARiJqhogp2Lu6bxufUFQQMuMyZbxjCydN/transactions/sent",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>Meta data.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.count",
            "description": "<p>Limit</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.pageCount",
            "description": "<p>Total page.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.totalCount",
            "description": "<p>Total Wallets.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.next",
            "description": "<p>Page next.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.previous",
            "description": "<p>Page previous.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.self",
            "description": "<p>Page current.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.first",
            "description": "<p>Page first.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.last",
            "description": "<p>Page last.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Array Transactions.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n    \"meta\": {\n        \"count\": 2,\n        \"pageCount\": 2,\n        \"totalCount\": 4,\n        \"next\": \"/v2/wallets/boldninja/transactions/sent?page=2\",\n        \"previous\": null,\n        \"self\": \"/v2/wallets/boldninja/transactions/sent?page=1\",\n        \"first\": \"/v2/wallets/boldninja/transactions/sent?page=1\",\n        \"last\": \"/v2/wallets/boldninja/transactions/sent?page=2\"\n    },\n    \"data\": [\n        {\n            \"id\": \"08c6b23f9edd97b613f17153fb97a316a4fb83136e9842655dafc8262f363e0e\",\n            \"blockId\": \"14847399772737279404\",\n            \"type\": 3,\n            \"amount\": 0,\n            \"fee\": 100000000,\n            \"sender\": \"DARiJqhogp2Lu6bxufUFQQMuMyZbxjCydN\",\n            \"recipient\": \"DARiJqhogp2Lu6bxufUFQQMuMyZbxjCydN\",\n            \"signature\": \"304402207ba0e8aaee93695360081b7ce713f13d62b544038ac440bd46357398af86cae6022059ac74586738be1ef622e0baba992d0e417d9aed7ab980f374eb0c9d53e25f8e\",\n            \"asset\": {\n                \"votes\": [\n                    \"+0257b7724e97cd832e0c28533a86da5220656f9b5122141daab20e8526decce01f\"\n                ]\n            },\n            \"confirmations\": 1636232,\n            \"timestamp\": {\n                \"epoch\": 17094358,\n                \"unix\": 1507195558,\n                \"human\": \"2017-10-05T09:25:58Z\"\n            }\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "Desktop/Know/core/packages/docs/wallet.js",
    "groupTitle": "Wallets"
  },
  {
    "type": "get",
    "url": "/api/v2/wallets/:address/votes",
    "title": "Get Votes of Wallets",
    "name": "GetVotesOfWallets",
    "version": "2.0.0",
    "group": "Wallets",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>The number of the page that will be returned. (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>The number of resources per page. (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address Wallets. (Required)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://127.0.0.1:4003/api/v2/wallets/DDiTHZ4RETZhGxcyAi1VruCXZKxBFqXMeh/votes",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>Meta data.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.count",
            "description": "<p>Limit</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.pageCount",
            "description": "<p>Total page.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.totalCount",
            "description": "<p>Total Wallets.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.next",
            "description": "<p>Page next.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.previous",
            "description": "<p>Page previous.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.self",
            "description": "<p>Page current.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.first",
            "description": "<p>Page first.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.last",
            "description": "<p>Page last.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Array Wallets .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n {\n    \"meta\": {\n        \"count\": 2,\n        \"pageCount\": 2,\n        \"totalCount\": 3,\n        \"next\": \"/v2/wallets/boldninja/votes?page=2\",\n        \"previous\": null,\n        \"self\": \"/v2/wallets/boldninja/votes?page=1\",\n        \"first\": \"/v2/wallets/boldninja/votes?page=1\",\n        \"last\": \"/v2/wallets/boldninja/votes?page=2\"\n    },\n    \"data\": [\n        {\n            \"id\": \"08c6b23f9edd97b613f17153fb97a316a4fb83136e9842655dafc8262f363e0e\",\n            \"blockId\": \"14847399772737279404\",\n            \"type\": 3,\n            \"amount\": 0,\n            \"fee\": 100000000,\n            \"sender\": \"DARiJqhogp2Lu6bxufUFQQMuMyZbxjCydN\",\n            \"recipient\": \"DARiJqhogp2Lu6bxufUFQQMuMyZbxjCydN\",\n            \"signature\": \"304402207ba0e8aaee93695360081b7ce713f13d62b544038ac440bd46357398af86cae6022059ac74586738be1ef622e0baba992d0e417d9aed7ab980f374eb0c9d53e25f8e\",\n            \"asset\": {\n                \"votes\": [\n                    \"+0257b7724e97cd832e0c28533a86da5220656f9b5122141daab20e8526decce01f\"\n                ]\n            },\n            \"confirmations\": 1636029,\n            \"timestamp\": {\n                \"epoch\": 17094358,\n                \"unix\": 1507195558,\n                \"human\": \"2017-10-05T09:25:58Z\"\n            }\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "Desktop/Know/core/packages/docs/wallet.js",
    "groupTitle": "Wallets"
  }
] });
