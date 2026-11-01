# Componentes de React Native

Este proyecto reúne las prácticas y los conocimientos que adquirí durante el curso de componentes de React Native. Implementé ejemplos interactivos para explorar componentes nativos, navegación, listas, animaciones, gestos y temas en una aplicación móvil con Expo.

## Contenido del curso

- **Animaciones y gestos:** animé vistas con la API `Animated`, transiciones de opacidad y posición, curvas `Easing`, movimiento con `PanResponder` y carga progresiva de imágenes.
- **Componentes de interfaz:** trabajé con switches, alertas, campos de texto y controles de formulario usando estado de React.
- **Teclado y formularios:** adapté la pantalla de entrada de datos para convivir con el teclado en iOS y Android.
- **Listas:** implementé ejemplos con `SectionList`, actualización mediante pull-to-refresh y carga de elementos al llegar al final con `FlatList`.
- **Navegación y modales:** organicé las pantallas con Expo Router e incorporé rutas presentadas como modales.
- **Slides:** construí una presentación horizontal paginada con navegación entre diapositivas.
- **Temas:** preparé componentes compatibles con modo claro y oscuro, selección del tema del sistema y persistencia de la preferencia con AsyncStorage.
- **Componentes reutilizables:** organicé elementos compartidos de presentación y apliqué estilos con NativeWind y Tailwind CSS.

## Tecnologías

- Expo SDK 58
- React Native y TypeScript
- Expo Router
- NativeWind y Tailwind CSS
- React Native Reanimated
- AsyncStorage

## Requisitos

- Node.js
- pnpm
- Expo Go para probar las funciones compatibles, o un emulador/dispositivo configurado

## Instalación y ejecución

Instala las dependencias:

```bash
pnpm install
```

Inicia el servidor de desarrollo:

```bash
pnpm start
```

También puedes iniciar una plataforma directamente:

```bash
pnpm android
pnpm ios
pnpm web
```

Sigue las instrucciones de Expo para abrir la aplicación en Expo Go, un emulador o un navegador. Algunas funciones o dependencias nativas pueden requerir un development build.

## Comprobaciones

Ejecuta ESLint:

```bash
pnpm lint
```

Comprueba los tipos de TypeScript:

```bash
pnpm exec tsc --noEmit
```

## Estructura principal

```text
src/
  app/          Pantallas y rutas de Expo Router
  constants/    Colores y configuración de rutas del menú
  hooks/        Hooks compartidos para animación y tema
presentation/
  components/   Componentes compartidos de presentación
  context/      Estado y proveedor para la selección del tema
assets/
  images/       Imágenes utilizadas en las diapositivas
```
