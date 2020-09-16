/** Image Compression Tool By Ayush Sharma From CTRLTAB */
function ___compress(FILE_INPUT_FIELD_ID,OUTPUT_FORMAT,OUTPUT_WIDTH,OUTPUT_HEIGHT,RETURN_FUNCTION){
    let SUPPORTED_FILE_FORMAT = ['image/jpg','image/jpeg','image/png','image/webp','image/svg+xml']
    let INPUT_IMAGE = document.getElementById(FILE_INPUT_FIELD_ID).files[0]
    if(!INPUT_IMAGE){ 
        console.warn('IMAGE FILE EMPTY!')
        return; 
    }
    if(!(SUPPORTED_FILE_FORMAT.includes(INPUT_IMAGE.type))){ 
        console.warn('INPUT FILE FORMAT NOT SUPPORTED!')
        return; 
    }
    if(!(SUPPORTED_FILE_FORMAT.includes(OUTPUT_FORMAT))){ 
        console.warn('OUTPUT FILE FORMAT NOT SUPPORTED!')
        return; 
    }
    if(SUPPORTED_FILE_FORMAT.includes(INPUT_IMAGE.type)){
        let IMAGE_READER = new FileReader();
            IMAGE_READER.readAsDataURL(INPUT_IMAGE);
            IMAGE_READER.onload = (TEMP_DATA)=>{
                let TEMP_IMAGE = new Image();   
                TEMP_IMAGE.src= TEMP_DATA.target.result;
                TEMP_IMAGE.onload = (c)=>{
                    let canvas = document.createElement('canvas');
                    let sc = OUTPUT_WIDTH/c.target.width;
                    let ctx= canvas.getContext('2d');
                        canvas.width = (OUTPUT_WIDTH=='NA')? c.target.width:OUTPUT_WIDTH;
                        canvas.height = (OUTPUT_HEIGHT=='NA')?c.target.height * sc:OUTPUT_HEIGHT;
                        ctx.drawImage(c.target,0,0,canvas.width,canvas.height);
                    let COMPRESSED_IMAGE = ctx.canvas.toDataURL(OUTPUT_FORMAT);
                    return RETURN_FUNCTION(COMPRESSED_IMAGE);
                }
            }
        }
}
