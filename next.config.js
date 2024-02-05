/** @type {import('next').NextConfig} */
const path = require('path')


const nextConfig = {}

module.exports = {
    //config sass
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    nextConfig
}