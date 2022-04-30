# AAlert model's structure

### Hair Size
**name: _string_**

### Hair Style
**name: _string_**

### Hair
**hair_size_id: _reference_**
**hair_style_id: _reference_**

### Eye color
**name: _string_**

### Skin color
**name: _string_**

### gender
**name: _string_**

### Complexion
**name: _string_**

### Description
**skin_color_id: _reference_**  
**eye_color_id: _reference_**  
**complexion_id: _reference_**  
**gender_id: _reference_**  
**hair_id: _reference_**  
**height:  _string_**  
**clothing:  _string_**  
**particular_signs: _string_**  

### Subject
**first_name: _string_**
**second_name: _string_**
**surname: _string_**
**url_image:_string_**
**date_of_birth: _string_**
**description: _reference_**

### Alert
**subject: _reference_**
**date_of_disappearance: _string_**
**place_of_disappearence: _string_**
**age: _string_**
