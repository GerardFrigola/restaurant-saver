// Initialize map
const map = L.map('map').setView([51.505, -0.09], 13); // Default to London

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Test marker (replace later with real data)
L.marker([51.5, -0.09]).addTo(map)
  .bindPopup("Test Restaurant")
  .openPopup();

const supabaseUrl = 'https://kfztnzahcpamkfcqohsa.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtmenRuemFoY3BhbWtmY3FvaHNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE3NDIwNDEsImV4cCI6MjA2NzMxODA0MX0.HEGmckquN6snFttU0TF9kxWNkdYEuRhAVuvvCso7p1g';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Test connection (optional)
async function testSupabase() {
const { data, error } = await supabase.from('restaurants').select('*');
console.log(data);
}
testSupabase();