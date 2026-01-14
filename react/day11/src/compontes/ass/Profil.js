import React from 'react';
import { useFontSize } from '../context/FontSizeContext';

const StudentProfile = ({ student }) => {
    const { fontSize } = useFontSize();
    
    if (!student) {
        return (
            <div style={{ padding: '20px', fontSize: fontSize, textAlign: 'center', backgroundColor: '#f9f9f9', height: '100%' }}>
                <h2 style={{ fontSize: fontSize }}>Select a student to view their profile.</h2>
                <p>Click the "View Profile" button in the table.</p>
            </div>
        );
    }

    
    const baseSize = parseInt(fontSize); 

    return (
        <div style={{ padding: '30px', backgroundColor: '#eef', borderLeft: '2px solid #ccc' }}>
            <h2 style={{ fontSize: `${baseSize + 4}px`, borderBottom: '2px solid #ddd', paddingBottom: '10px' }}>
                Full Profile: {student.firstName} {student.lastName}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
                <img 
                    src={student.profilePicture} 
                    alt={`${student.firstName}'s Profile`} 
                    style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #333' }}
                />
            </div>
            
            <p style={{ fontSize: fontSize }}><strong>Course:</strong> {student.course}</p>
            <p style={{ fontSize: fontSize }}><strong>Country:</strong> {student.country}</p>
            <p style={{ fontSize: fontSize }}><strong>City:</strong> {student.city}</p>
            <p style={{ fontSize: fontSize }}><strong>Email:</strong> {student.email}</p>
            <p style={{ fontSize: fontSize }}><strong>Phone:</strong> {student.phone}</p>
        </div>
    );
};

export default StudentProfile;