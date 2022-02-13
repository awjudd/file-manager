import { container } from 'tsyringe';

export default function Inject() {
  return function (target: any, property: string) {
    Object.defineProperty(target, property, {
      get() {
        return container.resolve(Reflect.getMetadata('design:type', target, property));
      },
    });
  };
}
