export function getBaseUrl() {
    if(process.env.NODE_ENV === 'production'){
        return 'https://educafacilapi.azurewebsites.net'
    }
    
    return ''
}