import React from 'react';
import styles from './TodoTemplate.module.css';

const TodoTemplate = ({children}) => {
    return (
        <div className={styles.TodoTemplate}>
            <div className={styles.title}>일정 관리</div>
            {/* 컴포넌트 사이에 컴포넌트를 끼워넣을예정 */}
            <div className={styles.content}>{children}</div> 
        </div>
    );
};

export default TodoTemplate;