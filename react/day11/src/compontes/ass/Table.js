import React from 'react';
import { useFontSize } from '../context/FontSizeContext';

const Table = ({ students, onSelectStudent }) => {
    const { fontSize } = useFontSize();
    
    
    const tableStyle = { 
        width: '100%', 
        borderCollapse: 'collapse', 
        fontSize 
    };
    const thTdStyle = { 
        border: '1px solid #ddd', 
        padding: '10px', 
        textAlign: 'left' 
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2 style={{ fontSize: fontSize }}>Student Records</h2>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={thTdStyle}>First Name</th>
                        <th style={thTdStyle}>Last Name</th>
                        <th style={thTdStyle}>Course</th>
                        <th style={thTdStyle}>Country</th>
                        <th style={thTdStyle}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.id}>
                            <td style={thTdStyle}>{student.firstName}</td>
                            <td style={thTdStyle}>{student.lastName}</td>
                            <td style={thTdStyle}>{student.course}</td>
                            <td style={thTdStyle}>{student.country}</td>
                            <td style={thTdStyle}>
                                <button 
                                    onClick={() => onSelectStudent(student)}
                                    style={{ padding: '5px 10px', cursor: 'pointer' }}
                                >
                                    View Profile
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;