module.exports = grammar({
    name: 'snap',

    rules: {
        source_file: $ => seq(
            field('header', $.header),
            field('body', $.body),
        ),

        header: $ => seq(
            '---',
            repeat($.metadata),
            '---',
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
            /.+/,
        ),

        path: $ => /\/?[^\/\s]+(?:\/[^\/\s]+)*/,
    }
})
