module.exports = grammar({
    name: 'snap',

    rules: {
        source_file: $ => seq(
            $.header,
            $.body
        ),

        header: $ => seq(
            '---',
            // repeat($.metadata),
            // token($.body),
            choice(
                token(/.*/),
                '---',
            ),
            // token(
            //     repeat(/.*/)
            // ),
            // /[^(---)]*/,
        ),

        body: $ => /(.|[\r\n])*/,

        metadata: $ => seq(
            field('name', $.identifier),
            ':',
            field('value', $._value)
        ),

        identifier: $ => /[a-z_0-9]+/,

        _value: $ => choice(
            $.string,
        ),

        string: $ => choice(
            /\"[^\"]*\"/,
            /[^\s]+/,
        ),
    }
})
