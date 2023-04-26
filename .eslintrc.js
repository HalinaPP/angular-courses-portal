module.exports = {
    root: true,
    overrides: [
        {
            files: ["*.ts"],
            parserOptions: {
                project: ["tsconfig.*?.json", "e2e/tsconfig.json"],
                createDefaultProgram: true,
            },
            extends: ["plugin:@angular-eslint/recommended"],
            rules: {
                "@angular-eslint/no-empty-lifecycle-method": "off",
            },
        },
        {
            files: ["*.component.html"],
            extends: ["plugin:@angular-eslint/template/recommended"],
            rules: {
                "max-len": ["error", { code: 150 }],
            },
        },
        {
            files: ["*.component.ts"],
            extends: ["plugin:@angular-eslint/template/process-inline-templates"],
        },
        {
            files: ["*.*"],
            rules: {
                "no-empty-source": "off",
            },
        },
    ],
};
