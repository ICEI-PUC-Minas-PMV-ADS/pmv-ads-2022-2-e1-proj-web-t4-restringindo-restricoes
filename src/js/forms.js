$( "form" ).each(function() {
    var form = this;

    
    form.addEventListener( "invalid", function( event ) {
        event.preventDefault();
    }, true );

    
    $( form ).on( "submit", function( event ) {
        if ( !this.checkValidity() ) {
            event.preventDefault();
        }
    });

    $( "input, select, textarea", form )
        
        .on( "blur", function() {
            var field = $( this );
            if ( field.data( "kendoTooltip" ) ) {
                if ( this.validity.valid ) {
                    field.kendoTooltip( "destroy" );
                } else {
                    field.kendoTooltip( "hide" );
                }
            }
        })
        // Show the tooltip on focus
        .on( "focus", function() {
            var field = $( this );
            if ( field.data( "kendoTooltip" ) ) {
                field.kendoTooltip( "show" );
            }
        });

    $( "button:not([type=button]), input[type=submit]", form ).on( "click", function( event ) {
        
        $( "input, select, textarea", form ).each( function() {
            var field = $( this );
            if ( field.data( "kendoTooltip" ) ) {
                field.kendoTooltip( "destroy" );
            }
        });

        
        var invalidFields = $( ":invalid", form ).each(function() {
            var field = $( this ).kendoTooltip({
                content: function() {
                    return field[ 0 ].validationMessage;
                }
            });
        });

        invalidFields.first().trigger( "focus" ).eq( 0 ).focus();
    });
});
