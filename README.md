# 🗺️ Bettiah Maps

A dedicated Google Maps-based web application focusing on Bettiah, Bihar. This project leverages Google Maps JavaScript API to provide location-based services, places, navigation, and local special overlays for the Bettiah area, using real Google servers.

## 📍 About Bettiah

Bettiah is a city and headquarters of West Champaran district in Bihar, India. This application provides an interactive map interface specifically designed for exploring and navigating Bettiah and its surrounding areas.

## ✨ Features

- **Interactive Map**: Full Google Maps integration centered on Bettiah, Bihar
- **Real-time Data**: Uses Google's servers for live map data and places information
- **Place Search**: Find nearby:
  - 🏥 Hospitals
  - 🏫 Schools
  - 🍽️ Restaurants
  - 🏦 Banks
  - ⛽ Gas Stations
- **Custom Markers**: Important landmarks and locations marked
- **Info Windows**: Detailed information about places including ratings and addresses
- **Multiple Map Views**: Roadmap, Satellite, Hybrid, and Terrain views
- **Street View**: Integrated Google Street View
- **Responsive Design**: Works on desktop and mobile devices

## 📂 Project Structure

```
Bettiah-Maps/
├── index.html      # Main HTML file with map container and UI
├── script.js       # JavaScript functionality and Google Maps initialization
├── .gitignore      # Git ignore file for Node.js projects
└── README.md       # This file
```

## 🚀 Getting Started

### Prerequisites

To use this application, you'll need:
1. A modern web browser (Chrome, Firefox, Safari, or Edge)
2. A **Google Maps JavaScript API Key**

### Setting Up Google Maps API Key

1. **Get an API Key**:
   - Visit the [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one
   - Enable the following APIs:
     - Maps JavaScript API
     - Places API
   - Go to "Credentials" and create an API key
   - (Optional but recommended) Restrict your API key:
     - Application restrictions: HTTP referrers
     - API restrictions: Maps JavaScript API and Places API

2. **Add Your API Key**:
   - Open `index.html` in a text editor
   - Find the line:
     ```html
     <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&libraries=places" defer></script>
     ```
   - Replace `YOUR_GOOGLE_MAPS_API_KEY` with your actual API key:
     ```html
     <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX&libraries=places" defer></script>
     ```

### Installation & Running

1. **Clone the repository**:
   ```bash
   git clone https://github.com/SnakeEye-sudo/Bettiah-Maps.git
   cd Bettiah-Maps
   ```

2. **Add your Google Maps API key** (as described above)

3. **Open the application**:
   - Simply open `index.html` in your web browser
   - Or use a local web server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js http-server
     npx http-server
     ```
   - Then navigate to `http://localhost:8000` in your browser

## 🎯 Usage

1. **Navigate the Map**: 
   - Use your mouse to pan around
   - Scroll to zoom in/out
   - Use the zoom controls on the map

2. **Search for Places**:
   - Click on any category button (Hospitals, Schools, etc.)
   - Markers will appear showing nearby locations
   - Click on markers to see details

3. **Reset View**:
   - Click the "🏠 Reset View" button to return to the default view centered on Bettiah

4. **Switch Map Types**:
   - Use the map type control to switch between:
     - Roadmap (default)
     - Satellite
     - Hybrid
     - Terrain

## 🔧 Customization

### Change Default Location

In `script.js`, modify the `BETTIAH_CENTER` constant:

```javascript
const BETTIAH_CENTER = {
    lat: 26.8022,  // Your desired latitude
    lng: 84.5025   // Your desired longitude
};
```

### Add Custom Landmarks

In `script.js`, modify the `addImportantLandmarks()` function:

```javascript
const landmarks = [
    {
        position: { lat: 26.8022, lng: 84.5025 },
        title: 'Your Location Name',
        description: 'Your location description'
    },
    // Add more landmarks here
];
```

### Modify Search Radius

In `script.js`, change the radius in the `showPlaces()` function:

```javascript
const request = {
    location: BETTIAH_CENTER,
    radius: 5000, // Change this value (in meters)
    type: type
};
```

## 🔐 API Key Security

**Important Security Notes:**

- ⚠️ Never commit your actual API key to a public repository
- Use environment variables or a configuration file (add to `.gitignore`)
- Set up API key restrictions in Google Cloud Console:
  - Restrict by HTTP referrer (domain)
  - Restrict to specific APIs only
  - Set up billing alerts to monitor usage
- For production deployments, consider using a backend proxy to hide your API key

## 📝 Configuration File (Optional)

Create a `config.js` file (add to `.gitignore`):

```javascript
const CONFIG = {
    GOOGLE_MAPS_API_KEY: 'YOUR_ACTUAL_API_KEY_HERE'
};
```

Then modify `index.html` to use it:

```html
<script src="config.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?key=" defer></script>
<script>
    // Dynamically add API key
    const script = document.querySelector('script[src*="maps.googleapis.com"]');
    script.src += CONFIG.GOOGLE_MAPS_API_KEY + '&libraries=places';
</script>
```

## 🌐 Deployment

### GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages"
3. Select "main" branch as source
4. Your site will be available at: `https://snakeeye-sudo.github.io/Bettiah-Maps/`

### Other Platforms

- **Netlify**: Drag and drop your project folder
- **Vercel**: Connect your GitHub repository
- **Firebase Hosting**: Use Firebase CLI to deploy

## 📊 API Usage Limits

Google Maps Platform offers a free tier with $200 credit per month:

- **Maps JavaScript API**: 28,000 free map loads per month
- **Places API**: Varies by request type

Monitor your usage in the [Google Cloud Console](https://console.cloud.google.com/)

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 🔗 Links

- **Google Maps JavaScript API Documentation**: https://developers.google.com/maps/documentation/javascript
- **Places API Documentation**: https://developers.google.com/maps/documentation/places/web-service
- **Google Cloud Console**: https://console.cloud.google.com/

## 📧 Support

For issues, questions, or suggestions:
- Open an issue on GitHub
- Contact: [Your Contact Information]

## 🙏 Acknowledgments

- Google Maps Platform for providing the mapping services
- The open-source community for inspiration and resources
- Bettiah, Bihar for being the focus of this project

---

**Made with ❤️ for Bettiah, Bihar**

*Last Updated: October 2025*
