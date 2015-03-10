# Backbase Training Exercise

## Portal Frontend - Module 3: Container Development

Create complex layouts for your applications by learning how to develop containers that implement your application's UI logic, and see how Backbase CXP supports multiple templates for each device.

### Contents

 - **pf3e1**: Create your first container ([solution](cxp-fe-training-03/src/main/webapp/static/cxp-fe-training-03/containers/pf3e1-accordion))
 - **pf3e2a**: How to enable Drag and Drop for your container ([solution](cxp-fe-training-03/src/main/webapp/static/cxp-fe-training-03/containers/pf3e2a-accordion))
 - **pf3e2b**: Create an Accordion UI ([solution](cxp-fe-training-03/src/main/webapp/static/cxp-fe-training-03/containers/pf3e2b-accordion))
 - **pf3e3**: Style your container ([solution](cxp-fe-training-03/src/main/webapp/static/cxp-fe-training-03/containers/pf3e3-accordion))
 - **pf3e4**: How to render your container on the client-side ([solution](cxp-fe-training-03/src/main/webapp/static/cxp-fe-training-03/containers/pf3e4-accordion))

### Installation & Configuration

 - Copy and paste the **cxp-fe-training-03** folder in the **bundles** folder of your Launchpad 0.11.x project
 - If it is not already there, add the `bundles.dir` property as a new property in **portalserver/pom.xml**:

```xml
<bundles.dir>${project.parent.basedir}/bundles</bundles.dir>
```

 - Add the bundle resource base in **portalserver/pom.xml**, e.g.:

```xml
<resourceBases>
    <resourceBase>${bundles.dir}/cxp-fe-training-03/src/main/webapp</resourceBase>
    <resourceBase>${project.basedir}/src/main/webapp</resourceBase>
    <resourceBase>${work.dir}</resourceBase>
</resourceBases>
<extraClasspath>${bundles.dir}/cxp-fe-training-03/target/classes;${basedir}/target/classes/;${basedir}/target/portalserver/WEB-INF/classes</extraClasspath>
```
