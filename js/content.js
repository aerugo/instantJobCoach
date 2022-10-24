export const jobArray = [
  {
    job: '<h1>Academic</h1>',
    content:
    `<p>Wow, what a treat! My friend, you’re on your way to become one of the few chosen to push the thoughts and practices of humankind towards an excitingly unknown future. Well, at least on paper. Truth to be told, you’ll probably spend half your life trying to understand Foucault, all while building up a fatal student loan that will forever follow you like a shadow. And when you’re finally finished with all those obscure university courses, you’ll be so alienated from the actual world that nobody will understand what you’re even talking about.</p>
    
    <p>The rest of your professional career will be filled with project employments with an embarrassingly low pay, chasing financial support for some nisched research project about slight grammatical changes in verb conjugation in a language spoken by twenty people in Papa New Guinea, trying to convince someone, anyone, that what you’re doing matters to the world. When that time comes, just remember to remind yourself: you’re doing great.</p>`
  },
  {
    job: '<h1>Digital Nomad</h1>',
    content:
      `<p>Nothing says late capitalist western society like the digital nomad! You will basically become the embodiment of our times, surfing the waves of ones and zeros from wherever you want. The world is your oyster, as they say. Sounds pretty cool, right? This choice of career is perfect for whoever loves praising responsibility without actually taking any, and who can’t seem to stop ranting about the chains of 9 to 5 work and why psychedelic drugs should be legalized, while desperately running from any kind of stabile relations that might ruin your fresh air of spontaneity. Sounds pretty much like you, right?</p>
    
      <p>Chances are you’ll soon end up on some balinese island, writing blog posts about your radical life style and how you’ve just discovered tantric meditation and magic mushroom as a means to see through the cracks in that slick surface the press is trying to sell for reality. Keep fighting the system, you brave soul, and don’t let any smart ass in a suit tell you that what you do don’t matter! Just don’t tell anyone that you’re actually living on your dads money, and you’ll keep your spiritual image real tight.</p>`
  }
]

export const htmlForm =
`<p>To find the perfect new career for you, we would need you to provide us with some information about yourself.</p> 
<p>Please fill in the following form as thoroughly as possible, as it is vital that all factors are considered when calculating your perfect profession.</p>
<form method="post">
<label for="fname" id="fname" value="value">First name:</label>
<input type="text" name="fname">
<label for="lname">Last name:</label>
<input type="text" name="lname">
<br>
<label for="age">Age:</label>
<input type="number" name="age">
<br>
<label for="education">Education:</label>
<select name="education">
  <option value="highschool">High School or equivalent</option>
  <option value="bachelor">Bachelor's degree</option>
  <option value="master">Master's degree</option>
  <option value="doctorate">Doctorate</option>
  <option value="life">Life</option>
</select>
<br>
<label for="zodiac">Zodiac sign:</label>
<select name="zodiac">
  <option value="aries">Aries</option>
  <option value="taurus">Taurus</option>
  <option value="gemini">Gemini</option>
  <option value="cancer">Cancer</option>
  <option value="leo">Leo</option>
  <option value="virgo">Virgo</option>
  <option value="libra">Libra</option>
  <option value="scorpio">Scorpio</option>
  <option value="sagittarius">Saggitarius</option>
  <option value="capricorn">Capricorn</option>
  <option value="aquarius">Aquarius</option>
  <option value="pisces">Pisces</option>
</select>
<label for="country">Country of residensy</label>
<input type="text" name="country">
<button class="submit">Submit!</button>
</form>`;
