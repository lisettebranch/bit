
// -------------------- Fill table with data -------------------

$(document).ready(function() {
    $.getJSON('data.json', function(data) {
            $('#data_table').DataTable( {
            data: data,
            columns: [
                { data: 'id' },
                { data: 'first_name' },
                { data: 'last_name' },
                { data: 'email' },
                { data: 'gender' }
            ],
            deferRender: true,
            scrollY: 600,
            scrollCollapse: true,
            scroller: true,
            iDisplayLength: 14,
            "info": false,
            "dom": '<"top"if<"clear">>rt<"bottom"p<"clear">>',
            language: {
                search: "_INPUT_",
                searchPlaceholder: "Search..."
            }
        } );
    });
} );
