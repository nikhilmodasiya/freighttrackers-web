import React, { Component } from 'react';
import cx from 'classnames';

//styles
import styles from 'src/styles/formBuilder.scss';

const renderForm = (config, params) => {

        /* This function will render the whole form, initially it will render the rows and then according the number
         * of columns it has, it renders the columns, config is the form configuration which is explained in
         * export section
         */
        return (
            <div className='formBody'>
                {config.map((row) => {
                    return renderFormRow(row, params);
                })}
            </div>
        )
    },

    renderFormRow = (formRow, params) => {

        /* This function will render a row of a form. ColumnCount counts the number of columns present in a row and
         * applies corresponding bootstrap class. In accordance, this function calls the render formColumn class.
         */

        const columnCount = formRow.columns.length,
            columnClass = `col-md-${Math.floor(12 / columnCount)}`;

        return (
            <div className='formRow' key={formRow.id}>
                {formRow.columns.map((column) => {
                    return renderFormColumn(column, columnClass, params);
                })}
            </div>
        )
    },

    renderFormColumn = (formColumn, columnClass = 'col-md-12', params) => {

        /* This function will render a column of a rows. fieldCount counts the number of fields present in a column.
         * In accordance, this function calls the render formField function.
         */

        const fieldCount = formColumn.fields.length,
            fieldClass = `col-md-${Math.floor(12 / fieldCount)}`;

        return (
            <div className={cx('formColumnWrapper', columnClass)} key={formColumn.id}>
                <span className='formFieldTitle col-md-12'>{formColumn.label}</span>
                <div className='formFieldWrapper'>
                    {formColumn.fields.map((field) => {
                        return renderFormField(field, fieldClass, params)
                    })}
                </div>
            </div>
        )
    },

    renderFormField = (formField, fieldClass, params) => {
        /* This function will render a field of a column.
         */

        let {onChange, onRemoveFile} = params;
        return (
            <div className={cx('formInputCommon',fieldClass)} key={formField.id}>
                {FormFields.getFormField(formField, {className: 'form-control', onChange, onRemoveFile})}
            </div>
        )
    };


export default {

    /**
     * will render the form
     * @param formConfig = Array of row object having columns array
     * [{
     id: 'ROW',
     columns: [{
       id: 'COLUMN',
       label: '',
       fields: [{
         id: 'Field',
         header: 'Placeholder',
         type: FIELD_TYPES
       }]
     }]
     }
     */
    renderForm: function (formConfig, params) {
        return renderForm(formConfig, params);
    },

    /**
     * will render the label with field
     * @param fieldConfig = an object of column having fields array
     * {
       id: 'COLUMN',
       label: '',
       fields: [{
         id: 'Field',
         header: 'Placeholder',
         type: FIELD_TYPES
       }]
     }
     */
    renderFormField: function (fieldConfig) {
        return renderFormColumn(fieldConfig);
    }
}
