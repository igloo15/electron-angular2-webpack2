const copy = require('copy');
const packager = require('electron-packager');
const path = require('path');
const fs = require('fs');

const electronPackageOptions = {
    dir:'./dist/web',
    out:'./dist/electron',
    overwrite:true,
    arch:'all',
    platform:'all',
};

copy('package.json', 'dist/web', {overwrite: true}, function(err, files){
    
    if(err){
      console.log(err);
      throw err;
    }
    
    console.log("");
    console.log("STARTING ELECTRON PACKAGING STAGE");
    packager(electronPackageOptions, function(err, appPaths){
      if(err){
        console.log(err);
        throw err;
      }
      
    });

});






