# image-compression-html-canvas-js
Simple Image Compression Tool

Calling The Function
___compress(FILE_INPUT_FIELD_ID,OUTPUT_FORMAT,OUTPUT_WIDTH,OUTPUT_HEIGHT,RETURN_FUNCTION)

FILE_INPUT_FIELD_ID = ID of the Input File html form field

OUTPUT_FORMAT       = Output file format
                    ( Supported Output format  ['image/jpg','image/jpeg','image/png','image/webp','image/svg+xml'] )

OUTPUT_WIDTH        = Width of output file
                    ( Numeric value or 'NA' as string )

OUTPUT_HEIGHT       = Height of output file
                    ( Numeric value or 'NA' as string )
                    (NB: "'NA' Value with a numeric width helps maintain aspect ratio")

RETURN_FUNCTION     = Callback return function with one parameter as a compressed output

FOR SAMPLE please refer test.html
