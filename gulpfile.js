var gulp = require('gulp')
var apidoc = require('gulp-apidoc')
var gls = require('gulp-live-server')

gulp.task('apidoc',function(done){
    apidoc({
        src:'example/',
        dest:'build/',
        // template:'template/',
        debug:true,
        incluedFilters:[".*\\.js$"]
    },done)
})
gulp.task('server',function(){
    var server = gls.static('build',3000)
    server.start()
    gulp.watch('example/*',function(file){
        server.notify.apply(server, [file])
    })
})


gulp.task('watch',function(){
   
    gulp.watch('example/*',['apidoc'])
})

gulp.task('default',['apidoc','server','watch'])