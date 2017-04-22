const copy = require('copy');
const packager = require('electron-packager');
const path = require('path');
const fs = require('fs');

const electronPackageOptions = {
    dir:'./dist',
    out:'./dist/electron',
    overwrite:true,
    arch:'all',
    platform:'all',
};

copy('package.json', 'dist', {overwrite: true}, function(err, files){
    
    if(err){
      console.log(err);
      throw err;
    }
    
    console.log("STARTING PACKAGING");
    packager(electronPackageOptions, function(err, appPaths){
      if(err){
        console.log(err);
        throw err;
      }
      
    });

});






