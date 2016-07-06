/*
 * Created by Ajay Gaur on 07/07/2016
 */
import React, {Component} from 'react';

//Constants
import FIELD_TYPES from 'src/constants/fieldTypes';

const onFieldChange = (value, fieldId, callBack) => {
        callBack(value, fieldId);
    },
    TYPE_TO_GENERATOR = {
        [FIELD_TYPES.TEXT.type]: function (field, params) {
            let {onChange, ...otherParams} = params;
            return (
                <input type="text" placeholder={field.placeholder}
                       onChange={(event)=>{onFieldChange(event.target.value,field.id,onChange)}}
                    {...field}
                    {...otherParams}
                />
            );
        }
    };


export default {
    getFormField: function (field, params = {}) {
        if (!field) {
            return null;
        }

        //This will return a function from the above code about which formfield is to be rendered
        const generator = TYPE_TO_GENERATOR[field.type];

        /* If the generator of this field exists then only it will call that function as written in the return
         * statement
         */
        return generator && generator(field, params);
    }
};
