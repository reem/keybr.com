// Generated file, do not edit.

import { type Rules } from "../ast.ts";

export default {
  start: {
    ref: "rust_item",
  },
  rust_item: {
    alt: [
      {
        ref: "rust_function",
      },
      {
        ref: "rust_struct",
      },
      {
        ref: "rust_impl",
      },
    ],
  },
  rust_function: {
    seq: [
      {
        f: 0.5,
        opt: "async ",
      },
      "fn ",
      {
        ref: "rust_fn_ident",
      },
      {
        f: 0.5,
        opt: {
          ref: "rust_generics",
        },
      },
      "(",
      {
        ref: "rust_params",
      },
      ")",
      {
        f: 0.5,
        opt: {
          seq: [
            " -> ",
            {
              ref: "rust_type",
            },
          ],
        },
      },
      " ",
      {
        ref: "rust_block",
      },
    ],
  },
  rust_generics: {
    seq: [
      "<",
      {
        ref: "rust_generic_param",
      },
      ">",
    ],
  },
  rust_generic_param: {
    alt: [
      "T",
      {
        seq: [
          "T: ",
          {
            ref: "rust_trait_bound",
          },
        ],
      },
    ],
  },
  rust_trait_bound: {
    alt: ["Clone", "Debug", "Default", "PartialEq"],
  },
  rust_params: {
    alt: [
      "",
      {
        ref: "rust_param",
      },
      {
        seq: [
          {
            ref: "rust_param",
          },
          ", ",
          {
            ref: "rust_param",
          },
        ],
      },
    ],
  },
  rust_param: {
    seq: [
      {
        ref: "rust_var_ident",
      },
      ": ",
      {
        ref: "rust_type",
      },
    ],
  },
  rust_statements: {
    alt: [
      {
        ref: "rust_statement",
      },
      {
        seq: [
          {
            ref: "rust_statement",
          },
          " ",
          {
            ref: "rust_statements",
          },
        ],
      },
    ],
  },
  rust_block: {
    seq: [
      "{ ",
      {
        ref: "rust_statements",
      },
      " }",
    ],
  },
  rust_statement: {
    alt: [
      {
        ref: "rust_let_statement",
      },
      {
        ref: "rust_if_statement",
      },
      {
        ref: "rust_loop_statement",
      },
      {
        ref: "rust_return_statement",
      },
      {
        ref: "rust_expression_statement",
      },
    ],
  },
  rust_let_statement: {
    seq: [
      "let ",
      {
        f: 0.5,
        opt: "mut ",
      },
      {
        ref: "rust_var_ident",
      },
      {
        f: 0.5,
        opt: {
          seq: [
            ": ",
            {
              ref: "rust_type_ident",
            },
          ],
        },
      },
      " = ",
      {
        ref: "rust_expression",
      },
      ";",
    ],
  },
  rust_if_statement: {
    alt: [
      {
        seq: [
          "if ",
          {
            ref: "rust_expression",
          },
          " ",
          {
            ref: "rust_block",
          },
          " else ",
          {
            ref: "rust_block",
          },
        ],
      },
      {
        seq: [
          "if let (",
          {
            ref: "rust_pattern",
          },
          ") = ",
          {
            ref: "rust_expression",
          },
          " ",
          {
            ref: "rust_block",
          },
          " else ",
          {
            ref: "rust_block",
          },
        ],
      },
    ],
  },
  rust_pattern: {
    seq: [
      {
        ref: "rust_var_ident",
      },
      " @ ",
      {
        ref: "rust_number_literal",
      },
      "..",
      {
        ref: "rust_number_literal",
      },
    ],
  },
  rust_loop_statement: {
    alt: [
      {
        seq: [
          "loop ",
          {
            ref: "rust_block",
          },
        ],
      },
      {
        seq: [
          "while ",
          {
            ref: "rust_expression",
          },
          " ",
          {
            ref: "rust_block",
          },
        ],
      },
      {
        seq: [
          "for ",
          {
            ref: "rust_var_ident",
          },
          " in ",
          {
            ref: "rust_expression",
          },
          " ",
          {
            ref: "rust_block",
          },
        ],
      },
    ],
  },
  rust_return_statement: {
    seq: [
      "return ",
      {
        ref: "rust_expression",
      },
      ";",
    ],
  },
  rust_expression_statement: {
    seq: [
      {
        ref: "rust_expression",
      },
      ";",
    ],
  },
  rust_expression: {
    alt: [
      {
        ref: "rust_literal",
      },
      {
        ref: "rust_var_ident",
      },
      {
        ref: "rust_function_call",
      },
      {
        ref: "rust_method_call",
      },
      {
        ref: "rust_infix_expression",
      },
      {
        ref: "rust_try_expression",
      },
      {
        ref: "rust_vec_literal",
      },
    ],
  },
  rust_try_expression: {
    seq: [
      {
        ref: "rust_expression",
      },
      "?",
    ],
  },
  rust_function_call: {
    seq: [
      {
        ref: "rust_fn_ident",
      },
      "(",
      {
        f: 0.5,
        opt: {
          ref: "rust_expression",
        },
      },
      ")",
    ],
  },
  rust_method_call_partial: {
    seq: [
      ".",
      {
        ref: "rust_fn_ident",
      },
      "(",
      {
        f: 0.5,
        opt: {
          ref: "rust_expression",
        },
      },
      ")",
    ],
  },
  rust_method_calls: {
    seq: [
      {
        ref: "rust_method_call_partial",
      },
      {
        f: 0.5,
        opt: ".await",
      },
      {
        f: 0.5,
        opt: "?",
      },
      {
        f: 0.5,
        opt: {
          ref: "rust_method_calls",
        },
      },
    ],
  },
  rust_method_call: {
    seq: [
      {
        ref: "rust_var_ident",
      },
      {
        ref: "rust_method_calls",
      },
    ],
  },
  rust_infix_expression: {
    seq: [
      {
        ref: "rust_expression",
      },
      " ",
      {
        ref: "rust_infix_operator",
      },
      " ",
      {
        ref: "rust_expression",
      },
    ],
  },
  rust_infix_operator: {
    alt: ["+", "-", "*", "/", "%", "!=", "<=", ">=", "||", "|", "^"],
  },
  rust_struct: {
    seq: [
      {
        f: 0.5,
        opt: {
          ref: "rust_derive_annotation",
        },
      },
      "struct ",
      {
        ref: "rust_type_ident",
      },
      {
        f: 0.5,
        opt: {
          ref: "rust_generics",
        },
      },
      " { ",
      {
        ref: "rust_struct_field",
      },
      ", ",
      {
        ref: "rust_struct_field",
      },
      " }",
    ],
  },
  rust_derive_annotation: {
    seq: [
      "#[derive(",
      {
        ref: "rust_derive_traits",
      },
      ")] ",
    ],
  },
  rust_derive_traits: {
    alt: [
      {
        ref: "rust_derive_trait",
      },
      {
        seq: [
          {
            ref: "rust_derive_trait",
          },
          ", ",
          {
            ref: "rust_derive_traits",
          },
        ],
      },
    ],
  },
  rust_derive_trait: {
    alt: ["Debug", "Clone", "PartialEq", "Eq", "Default", "Hash", "Copy"],
  },
  rust_struct_field: {
    seq: [
      {
        ref: "rust_var_ident",
      },
      ": ",
      {
        ref: "rust_type",
      },
    ],
  },
  rust_impl: {
    seq: [
      "impl",
      {
        f: 0.5,
        opt: {
          seq: [
            " ",
            {
              ref: "rust_generics",
            },
          ],
        },
      },
      " ",
      {
        ref: "rust_type_ident",
      },
      {
        f: 0.5,
        opt: {
          ref: "rust_generics",
        },
      },
      " { ",
      {
        ref: "rust_function",
      },
      " }",
    ],
  },
  rust_type: {
    alt: [
      {
        ref: "rust_primitive_type",
      },
      {
        seq: [
          "&",
          {
            ref: "rust_type",
          },
        ],
      },
      {
        seq: [
          "&mut ",
          {
            ref: "rust_type",
          },
        ],
      },
      {
        seq: [
          "Result<",
          {
            ref: "rust_type",
          },
          ", ",
          {
            ref: "rust_type_ident",
          },
          ">",
        ],
      },
      {
        seq: [
          {
            ref: "rust_type_ident",
          },
          {
            f: 0.5,
            opt: {
              seq: [
                "<",
                {
                  ref: "rust_type",
                },
                ">",
              ],
            },
          },
        ],
      },
    ],
  },
  rust_primitive_type: {
    alt: ["i32", "u32", "i64", "u64", "f32", "f64", "String", "bool", "char"],
  },
  rust_literal: {
    alt: [
      {
        ref: "rust_number_literal",
      },
      {
        ref: "rust_string_literal",
      },
      {
        ref: "rust_bool_literal",
      },
    ],
  },
  rust_number_literal: {
    alt: [
      "0",
      "1",
      "42",
      "100",
      "3.14",
      "2.718",
      {
        seq: [
          {
            ref: "rust_number_literal",
          },
          " ",
          {
            ref: "rust_infix_operator",
          },
          " ",
          {
            ref: "rust_number_literal",
          },
        ],
      },
      {
        seq: [
          "~",
          {
            ref: "rust_number_literal",
          },
        ],
      },
    ],
  },
  rust_string_literal: {
    seq: [
      '"',
      {
        ref: "rust_string_content",
      },
      '"',
    ],
  },
  rust_string_content: {
    alt: [
      "with, a comma!",
      "xavier",
      "quiz\\n",
      "cello",
      "orange\\\\yellow",
      "\\t \\n",
    ],
  },
  rust_bool_literal: {
    alt: ["true", "false"],
  },
  rust_vec_literal: {
    seq: [
      "vec![",
      {
        ref: "rust_vec_items",
      },
      "]",
    ],
  },
  rust_vec_items: {
    alt: [
      "",
      {
        ref: "rust_expression",
      },
      {
        seq: [
          {
            ref: "rust_expression",
          },
          ", ",
          {
            ref: "rust_expression",
          },
        ],
      },
      {
        seq: [
          {
            ref: "rust_expression",
          },
          ", ",
          {
            ref: "rust_expression",
          },
          ", ",
          {
            ref: "rust_expression",
          },
        ],
      },
    ],
  },
  rust_type_ident: {
    alt: [
      "Person",
      "Car",
      "Animal",
      "Shape",
      "Rectangle",
      "Circle",
      "Point",
      "String",
      "Vec",
      "HashMap",
    ],
  },
  rust_fn_ident: {
    alt: [
      "main",
      "add",
      "subtract",
      "multiply",
      "divide",
      "calculate",
      "process",
      "print_info",
      "is_valid",
      "create_new",
      "update",
      "delete",
      "len",
      "push",
      "pop",
      "insert",
      "remove",
      "contains",
      "to_string",
      "parse",
    ],
  },
  rust_var_ident: {
    alt: [
      "x",
      "y",
      "result",
      "value",
      "item",
      "index",
      "count",
      "total",
      "name",
      "age",
      "price",
      "size",
      "color",
      "flag",
      "vec",
      "map",
      "set",
      "string",
      "obj",
    ],
  },
} as Rules;
