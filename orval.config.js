module.exports = {
  json_placeholder: {
    output: {
      mode: "tags-split",
      target: "src/services/generator/",
      schemas: "src/services/models",
      client: "react-query",
      mock: true,
      override: {
        mutator: {
          path: "./src/lib/axios.ts",
          name: "customInstance",
        },
      },
    },
    input: {
      target: "./openapi/swagger.yml",
    },
  },
};
