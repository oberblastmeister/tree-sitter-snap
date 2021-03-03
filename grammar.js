module.exports = grammar({
    name: 'snap',

    rules: {
        source_file: $ => seq(
            $.header,
            $.body
        ),

        header: $ => /---(.|[\r\n])+?---/,

        body: $ => /(.|[\r\n])*/,
    }
})
