start -> rust_item ;

rust_item ->
    rust_function
  | rust_struct
  | rust_impl
  ;

rust_function -> "fn" _ rust_fn_ident [ rust_generics ] "(" rust_params ")" [ _ "->" _ rust_type ] _ rust_block ;

rust_generics -> "<" rust_generic_param ">" ;

rust_generic_param ->
    "T"
  | "T: " rust_trait_bound
  ;

rust_trait_bound ->
    "Clone"
  | "Debug"
  | "Default"
  | "PartialEq"
  ;

rust_params ->
    ""
  | rust_param
  | rust_param "," _ rust_param
  ;

rust_param -> rust_var_ident ":" _ rust_type ;

rust_statements -> rust_statement
  | rust_statement _ rust_statements;

rust_block ->
  "{" _ rust_statements _ "}";

rust_statement ->
    rust_let_statement
  | rust_if_statement
  | rust_loop_statement
  | rust_return_statement
  | rust_expression_statement
  ;

rust_let_statement -> "let" _ [ "mut" _ ] rust_var_ident [ ":" _ rust_type_ident ] _ "=" _ rust_expression ";" ;

rust_if_statement -> "if" _ rust_expression _ rust_block _ "else" _ rust_block ;

rust_loop_statement ->
    "loop" _ rust_block
  | "while" _ rust_expression _ rust_block
  | "for" _ rust_var_ident _ "in" _ rust_expression _ rust_block
  ;

rust_return_statement -> "return" _ rust_expression ";" ;

rust_expression_statement -> rust_expression ";" ;

rust_expression ->
    rust_literal
  | rust_var_ident
  | rust_function_call
  | rust_infix_expression
  | "(" rust_expression ", " rust_expression ")"
  ;

rust_function_call -> rust_fn_ident "(" [ rust_expression ] ")" ;

rust_infix_expression -> rust_expression _ rust_infix_operator _ rust_expression ;

rust_infix_operator ->
    "+"
  | "-"
  | "*"
  | "/"
  | "%"
  | "=="
  | "!="
  | "<"
  | ">"
  | "<="
  | ">="
  | "&&"
  | "||"
  | "&"
  | "|"
  | "^"
  | "<<"
  | ">>"
  ;

rust_struct -> "struct" _ rust_type_ident [ rust_generics ] _ "{" _ rust_struct_field "," _ rust_struct_field _ "}" ;

rust_struct_field -> rust_var_ident ":" _ rust_type ;

rust_impl -> "impl" [ _ rust_generics ] _ rust_type_ident [ rust_generics ] _ "{" _ rust_function _ "}" ;

rust_type ->
    rust_primitive_type
  | "&" [ "mut" _ ] rust_type
  | "Result<" rust_type "," _ rust_type_ident ">"
  | rust_type_ident [ "<" rust_type ">" ]
  ;

rust_primitive_type ->
    "i32"
  | "u32"
  | "i64"
  | "u64"
  | "f32"
  | "f64"
  | "String"
  | "bool"
  | "char"
  ;

rust_literal ->
    rust_number_literal
  | rust_string_literal
  | rust_bool_literal
  ;

rust_number_literal ->
    "0"
  | "1"
  | "42"
  | "100"
  | "3.14"
  | "2.718"
  ;

rust_string_literal -> "\"" rust_string_content "\"" ;

rust_string_content ->
    "a string, with a comma!"
  | "blah"
  | "click"
  | "bump"
  | "xavier"
  | "quiz"
  | "limoncello"
  ;

rust_bool_literal -> "true" | "false" ;

rust_type_ident ->
    "Person"
  | "Car"
  | "Animal"
  | "Shape"
  | "Rectangle"
  | "Circle"
  | "Point"
  | "String"
  | "Vec"
  | "HashMap"
  ;

rust_fn_ident ->
    "main"
  | "add"
  | "subtract"
  | "multiply"
  | "divide"
  | "calculate"
  | "process"
  | "print_info"
  | "is_valid"
  | "create_new"
  | "update"
  | "delete"
  ;

rust_var_ident ->
    "x"
  | "y"
  | "result"
  | "value"
  | "item"
  | "index"
  | "count"
  | "total"
  | "name"
  | "age"
  | "price"
  | "size"
  | "color"
  | "flag"
  ;
