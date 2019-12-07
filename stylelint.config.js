// Configuration for StyleLint
// See: https://stylelint.io/user-guide/configuration/

module.exports = {
  extends: ['@wemake-services/stylelint-config-scss', 'stylelint-config-css-modules', 'stylelint-a11y/recommended'],
  plugins: ['stylelint-no-unsupported-browser-features', 'stylelint-a11y'],

  rules: {
    indentation: null,
    'scale-unlimited/declaration-strict-value': null,
    'declaration-block-no-shorthand-property-overrides': null,
    'a11y/media-prefers-reduced-motion': null,
    'function-url-quotes': null,
    'csstools/use-nesting': null,
    'length-zero-no-unit': null,
    'plugin/no-low-performance-animation-properties': null,
    'a11y/no-outline-none': null,
    'max-line-length': null,
    'selector-max-compound-selectors': null,
    'color-format/format': null,
    'selector-pseudo-element-colon-notation': null,
    'selector-list-comma-newline-after': null,
    'number-leading-zero': null,
    'a11y/selector-pseudo-class-focus': null,
    'plugin/stylelint-no-indistinguishable-colors': null,
    'property-no-vendor-prefix': null,
    'csstree/validator': null,
  },
}
