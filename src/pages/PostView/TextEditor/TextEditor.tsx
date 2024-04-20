import "./TextEditor.css";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import {useState} from "react";
export const TextEditor = () => {
    return <div className="editor">
        <CKEditor
            editor={ClassicEditor}
            data="<p>Napisz komentarz!</p>"
            config={{
                toolbar: [
                    {
                        label: 'Others',
                        tooltip: 'Ustawienia czcionki',
                        items: [ 'bold', 'italic' ]
                    },
                    'undo', 'redo'
                    ,
                    {
                        // This dropdown has the icon disabled and a text label instead.
                        label: 'Lists',
                        icon: false,
                        items: [ 'bulletedList', 'numberedList', 'todoList' ]
                    },
                    {
                        // A "plus" sign icon works best for content insertion tools.
                        label: 'Insert',
                        icon: 'plus',
                        items: [ 'uploadImage']
                    },
                ]
            }}
        />
    </div>
}