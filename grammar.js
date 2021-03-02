module.exports = grammar({
    name: 'snap',

    rules: {
        source_file: $ => seq(
            field('header', $.header),
            field('body', $.body),
        ),

        header: $ => seq(
            $.sep,
            repeat($.metadata),
            $.sep,
        ),

        sep: $ => '---',

        metadata: $ => seq(
            field('name', $.identifier),
            ':',
            field('value', $._value)
        ),

        identifier: $ => /[a-z_0-9]+/,

        _value: $ => choice(
            $.string,
            $.path,
        ),

        string: $ => /\"[^\"]*\"/,

        path: $ => /\/?[^\/\s]+(?:\/[^\/\s]+)*/,

        body: $ => /(.|[\r\n])*/
    }
})
