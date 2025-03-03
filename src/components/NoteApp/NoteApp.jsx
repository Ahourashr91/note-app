import React, { Component } from 'react'
import Note from './Note'
import ColorBox from './ColorBox'

export default class NoteApp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            colors: [
                { color: "#fff" },
                { color: "#FFD37F" },
                { color: "#FFFA81" },
                { color: "#D5FA80" },
                { color: "#78F87F" },
                { color: "#79FBD6" },
                { color: "#79FDFE" },
                { color: "#7AD6FD" },
                { color: "#7B84FC" },
                { color: "#D687FC" },
                { color: "#FF89FD" },
            ],
            notes: [],
            noteTitle: "",
            inputColor: '#fff'
        }
        this.setColorHandler = this.setColorHandler.bind(this)
        this.formHandler = this.formHandler.bind(this)
        this.addNoteHandler = this.addNoteHandler.bind(this)
        this.emptyInput = this.emptyInput.bind(this)
        this.removeNoteHandler = this.removeNoteHandler.bind(this)
    }
    setColorHandler(bg) {
        this.setState({
            inputColor: bg
        })
    }
    formHandler(event) {
        this.setState({
            noteTitle: event.nativeEvent.target.value
        })
    }
    addNoteHandler() {
        if (this.state.noteTitle) {
            let newNote = {
                title: this.state.noteTitle,
                id: this.state.notes.length + 1,
                backgroundColor: this.state.inputColor
            }
            this.setState(prevState => {
                return {
                    notes: [...prevState.notes, newNote]
                }
            })
            this.emptyInput()
        }
    }
    emptyInput() {
        this.setState({
            noteTitle: "",
            inputColor: '#fff'
        })
    }
    removeNoteHandler(noteId) {
        let newNotesVar = this.state.notes.filter(note => {
            return note.id !== noteId
        })
        this.setState({
            notes: newNotesVar
        })
    }

    render() {
        return (
            <>
                <div>
                    <section>
                        <div>
                            <div className="header">React Note App</div>
                            <div style={{ marginTop: 30 }}>
                                <div>
                                    <div className='ifm'>
                                        <input onChange={this.formHandler} value={this.state.noteTitle} className="form-control" type="text" style={{ backgroundColor: this.state.inputColor }} placeholder="Something here..." />
                                    </div>
                                    <div>
                                        <div id='color-select'>
                                            {this.state.colors.map(color => (
                                                <ColorBox key={color.color} onChangeColor={this.setColorHandler} {...color} />
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <button id="btn-save" onClick={this.addNoteHandler} type="button">Add</button>
                                        <button id="btn-delete" onClick={this.emptyInput} type="button">Reset</button>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <div>
                                        <div>
                                            <div>
                                                {this.state.notes.map(note => (
                                                    <Note key={note.id} onRemove={this.removeNoteHandler} {...note}></Note>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                </div>
            </>
        )
    }
}
