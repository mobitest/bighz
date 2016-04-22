$.extend($.fn.tree.methods, {   
    /**
     * 激活复选框  
     * @param {Object} jq  
     * @param {Object} target  
     */  
    enableCheck : function(jq, target) {    
        return jq.each(function(){   
            var realTarget;   
            var clsDisable0 = 'fa fa-check',clsDisable1 = 'fa fa-check1', clsDisable2 = 'fa fa-check2';
            if(typeof target == 'string' || typeof target == 'number'){   
                realTarget = $(this).tree('find',target).target;   
            }else{   
                realTarget = target;   
            }   
            var ckSpan = $(realTarget).find('>span.tree-checkbox');   
            if(ckSpan.hasClass(clsDisable0)){   
                ckSpan.removeClass(clsDisable0);   
            }else if(ckSpan.hasClass(clsDisable1)){   
                ckSpan.removeClass(clsDisable1);   
            }else if(ckSpan.hasClass(clsDisable2)){   
                ckSpan.removeClass(clsDisable2);   
            }   
        });   
    },   
    /**
     * 禁用复选框  
     * @param {Object} jq  
     * @param {Object} target  
     */  
    disableCheck : function(jq, target) {   
        return jq.each(function() {   
            var realTarget;   
            var that = this;   
            var state = $.data(this,'tree');   
            var opts = state.options;   
            var clsDisable0 = 'fa fa-check',clsDisable1 = 'fa fa-check1', clsDisable2 = 'fa fa-check2';
            var cls0='tree-checkbox0',cls1='tree-checkbox1',cls2='tree-checkbox2';
            if(typeof target == 'string' || typeof target == 'number'){   
                realTarget = $(this).tree('find',target).target;   
            }else{   
                realTarget = target;   
            }   
            var ckSpan = $(realTarget).find('>span.tree-checkbox');   
            ckSpan.removeClass(clsDisable0).removeClass(clsDisable1).removeClass(clsDisable2);   
            if(ckSpan.hasClass('tree-checkbox0')){   
                ckSpan.addClass(clsDisable0);   
            }else if(ckSpan.hasClass('tree-checkbox1')){   
                ckSpan.addClass(clsDisable1);   
            }else{   
                ckSpan.addClass(clsDisable2)   
            }   
            if(!state.resetClick){   
                $(this).unbind('click').bind('click', function(e) {   
                    var tt = $(e.target);   
                    var node = tt.closest('div.tree-node');   
                    if (!node.length){return;}   
                    if (tt.hasClass('tree-hit')){   
                        $(this).tree('toggle',node[0]);   
                        return false;   
                    } else if (tt.hasClass('tree-checkbox')){   
                        if(tt.hasClass(clsDisable0) || tt.hasClass(clsDisable1) || tt.hasClass(clsDisable2)){   
                            $(this).tree('select',node[0]);   
                        }else{   
                            if(tt.hasClass('tree-checkbox1')){   
                                $(this).tree('uncheck',node[0]);   
                            }else{   
                                $(this).tree('check',node[0]);   
                            }   
                            return false;   
                        }   
                    } else {   
                        $(this).tree('select',node[0]);   
                        opts.onClick.call(this, $(this).tree('getNode',node[0]));   
                    }   
                    e.stopPropagation();   
                });   
            }   
               
        });   
    }   
});  