RPC.register('bd-graffiti:spray', async (source, sprayModel, sprayCoordsx, sprayCoordsy, sprayCoordsz, sprayRotationx, sprayRotationy, sprayRotationz, rndId) => {
    exports.oxmysql.execute(`INSERT INTO __objects SET 
    model='${sprayModel}',
    randomId = ${rndId},
    metaData = '{}',
    coordinates ='{"x":${sprayCoordsx},"y":${sprayCoordsy},"z":${sprayCoordsz},"h":{"x":${sprayRotationx},"y":${sprayRotationy},"z":${sprayRotationz}}}'`
    );
})