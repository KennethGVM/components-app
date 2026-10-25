# Aprendiendo componentes de React Native

Este proyecto forma parte de mi aprendizaje de desarrollo móvil con Expo y React Native. A medida que avance en el curso, iré creando y probando componentes, APIs y patrones que se usan habitualmente en aplicaciones móviles.

## Qué aprenderé en esta sección

En esta parte del curso aprenderé a trabajar con distintas piezas necesarias para construir interfaces móviles:

- Usar la **Animated API** para crear animaciones.
- Aplicar **easing** para controlar cómo avanzan las animaciones.
- Crear **hooks personalizados** para reutilizar lógica.
- Trabajar con componentes como **Switches**, **TextInputs** y **Alerts**.
- Manejar el **teclado** para que no cubra el contenido ni dificulte la lectura mientras escribo en un formulario.
- Practicar también con listas, gestos, modales, slides y temas claro/oscuro.

## Lo que ya preparé

Para seguir las prácticas, preparé la navegación con Expo Router y un menú que organiza las pantallas por tema. También agregué componentes compartidos para texto y vistas, colores para los temas claro y oscuro, fuentes Inter, NativeWind y la configuración inicial de Gesture Handler.

Las rutas para animaciones, switches, alertas, campos de texto, listas, modales, slides y temas ya están creadas. Por ahora, la mayoría son pantallas iniciales: iré implementando y completando cada ejemplo conforme avance en el curso. También quité componentes de demostración que venían con la plantilla original de Expo.

## Herramientas que estoy usando

- Expo SDK 58
- React Native y TypeScript
- Expo Router
- NativeWind y Tailwind CSS
- React Native Reanimated

## Requisitos

- Node.js
- pnpm
- Expo Go para probar las funciones compatibles o un emulador/dispositivo configurado

## Instalación y ejecución

Instala las dependencias:

```bash
pnpm install
```

Inicia el servidor de desarrollo:

```bash
pnpm start
```

También puedes abrir directamente una plataforma:

```bash
pnpm android
pnpm ios
pnpm web
```

Sigue las instrucciones que muestra Expo para abrir la aplicación en Expo Go, un emulador o un navegador. Algunas funciones o dependencias nativas pueden requerir un development build.

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
  hooks/        Hooks compartidos, incluido el acceso al tema
presentation/
  components/   Componentes compartidos de presentación y menú
```
