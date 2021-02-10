window.onload = function () {
    class ResponsiveImageMap {
        constructor(map, img, width) {
            this.img = img;
            this.originalWidth = width;
            this.areas = [];

            for (const area of map.find('area')) {
                this.areas.push({
                    element: area,
                    originalCoords: area.coords.split(',')
                });
            }

            window.addEventListener('resize', e => this.resize(e));
            this.resize();
        }

        resize() {
            const ratio = this.img.offsetWidth / this.originalWidth;

            for (const area of this.areas) {
                const newCoords = [];
                for (const originalCoord of area.originalCoords) {
                    newCoords.push(Math.round(originalCoord * ratio));
                }
                area.element.coords = newCoords.join(',');
            }

            return true;
        };
    }

    new ResponsiveImageMap($('#map_ID'), $('#img_ID')[0], $('#img_ID')[0].naturalWidth);
        return;
}
