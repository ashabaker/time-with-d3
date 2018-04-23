//simple scatter plot ==========================
var chartWidth = 800;
var chartHeight = 400;

//create svg element
var svg =  d3.select( '#chart')
  .append('svg')
  .attr( 'width', chartWidth)
  .attr('height', chartHeight);

  d3.json( '/data', function( err, data ){
      if( err ){
          return console.log(err);
      }

       console.log(data);
       generate( data );

  });


generate =(data)=>{
  d3.select( '#chart' )
  .append( 'svg' )
  .attr( 'width', chartWidth)
  .attr( 'height', chartHeight);

  svg.selectAll( 'circle' )
    .data( data )
    .enter()
    .append( 'circle' )
    .attr( 'cx', function(d){
      return d[0] ;
    })
    .attr( 'cy', function(d){
      return d[1] ;
    })
    .attr( 'r', function(d){
      return d[1]/10;
    })
    .attr('fill', '#D1AB0E');

    //labels

    svg.selectAll( 'text' )
      .data(data)
      .enter()
      .append( 'text' )
      .text(function(d){
        return d.join(',')
      })
      .attr( 'x', function(d){
        return d[0];
      })
      .attr( 'y', function(d){
        return d[1];
      });
}
//simple bar chart =======================================
// var barPadding = 5;
// //create svg element
// var svg =  d3.select( '#chart')
//   .append('svg')
//   .attr( 'width', chartWidth)
//   .attr('height', chartHeight);
//
//
//   d3.json( '/data', function( err, data ){
//       if( err ){
//           return console.log(err);
//       }
//
//        console.log(data);
//        generate( data );
//
//   });
//
//
// // //bind data and create bars
//     generate = (data) => {
//
//       svg.selectAll( 'rect' )
//       .data(data)
//       .enter()
//       .append( 'rect' )
//       .attr('x', function( d, i ){
//           return i * (chartWidth / data.length );
//       })
//       .attr('y', function( d ){
//         return chartHeight - d * 5 ;
//       })
//       .attr('width', chartWidth / data.length - barPadding)
//       .attr('height', function( d ){
//            return d * 5;
//       })
//       .attr('fill', '#7ED26D');
//
//
//
//       //create labels
//
//       svg.selectAll( 'text' )
//           .data(data)
//           .enter()
//           .append ('text')
//           .text(function (d){
//             return d;
//           })
//           .attr('x', function( d, i ){
//               return i * (chartWidth / data.length ) +
//               (chartWidth / data.length - barPadding - 10 ) /2;
//           })
//           .attr('y', function( d ){
//             return chartHeight - d * 5 +15;
//           })
//           .attr('font-size', 14)
//           .attr('fill', '#fff');
//
//     }
//
//
