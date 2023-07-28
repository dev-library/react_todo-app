import React, { useState } from "react";
import { MdAdd, MdOutlineInsertChart } from "react-icons/md";
import styles from "./TodoInsert.module.css";

const TodoInsert = (props) => {
    const [value, setValue] = useState('');

    // 연결된 input태그 내부에 작성된 값을 value상태변수와 연동
    const onChange = (e) => {
        setValue(e.target.value);
    };

    const onSubmit = (e) => {
        props.onInsert(value); // 폼에서 입력한 텍스트로 insert 로직 처리
        setValue(''); // 폼 비우기
        e.preventDefault();// 제출버튼은 새로고침을 유발하므로 기능 중단시키기
    }
    
    return (
        <form className={styles.TodoInsert} onSubmit={onSubmit}>
            <input className={styles.TodoInput} 
                    placeholder="할 일을 입력해주세요."
                    value={value}
                    onChange={onChange}/>
            <button className={styles.TodoInsertBtn} type="submit">
                <MdAdd />
            </button>
        </form>

    );
}

export default TodoInsert;